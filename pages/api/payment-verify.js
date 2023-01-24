// Next.js API route support: https://nextjs.org/docs/api-routes/introduction import {getUsersTopArtists} from '../../lib/spotify'; import {getUsersTopTracks} from '../../lib/spotify';
import {getSession} from 'next-auth/react';
import {getUsersInfo} from '../../lib/spotify';
import fetch, { Headers } from 'node-fetch';
import {paymentLookup, putPayment, modifyHasUsed} from '../../lib/user_lookup';
import { object, string } from 'yup';
var paypal_token = "";

export default async function handler(req, res) {
    try {
        const {
        token: {accessToken},
        } = await getSession({req});

        const userInfo = await getUsersInfo(accessToken) 
        const userJson = await userInfo.json()
        req.body.email = userJson["email"]

        let bodySchema = object({
          email: string().required().email(),
          order_id: string().required().uppercase().matches("^[A-Z0-9]*$")
        });

        // parse and assert validity
        const validBody = await bodySchema.validate(req.body);

        const order = await paymentLookup(req.body.order_id)
        const paypal_response = await makeRequest(req.body.order_id, false)
        if (paypal_response.status != "COMPLETED"){
            res.status(400).json({"error": "Venmo payment not completed."})
            return
        }
        console.log(order, "order")
        if (order) {
            res.status(400).json({"error": "Venmo payment already used to regenerate images."})
            return
        }
        putPayment(req.body.order_id)
        await modifyHasUsed(req.body.email)
        res.status(200).json({"message": "success"})
    } catch (e) {
        console.log(e)
        res.status(500).json({"error":"Internal error"})
    }
} 

async function makeRequest(order_id, is_retry){
    if (paypal_token == "") {
        paypal_token = await authorize()
    }

    let headers = new Headers();
    headers.set('Authorization', paypal_token);
    headers.set('Content-Type', 'application/json');
    headers.set('Accept-Encoding','gzip, deflate, br')
    const url = "https://api-m.paypal.com/v2/checkout/orders/" + order_id
    const response = fetch(url,{
        method:"GET",
        headers: headers
    }).then(async function (data){
        console.log(data.status)
        if (data.status == 401){
            if (is_retry) {
                throw Error("Authentication failed")
            } else{
                paypal_token = await authorize()
                makeRequest(order_id, true)
            }
        }
        var json_res = await data.json()
        console.log(json_res)
        return json_res
    }).catch(function (err) {
        console.log('something went wrong', err);
    });
    return response
}

async function authorize(){
    const client_id = process.env.PAYPAL_CLIENT_ID
    const client_secret = process.env.PAYPAL_CLIENT_SECRET

    let headers = new Headers();
    headers.set('Authorization', 'Basic ' + Buffer.from(client_id + ":" + client_secret).toString('base64'));
    headers.set('Content-Type', "application/x-www-form-urlencoded")

    const token = await fetch("https://api-m.paypal.com/v1/oauth2/token", {
        method: 'POST',
        headers: headers,
        body: 'grant_type=client_credentials'
    }).then(function (resp) {
        return resp.json();
    }).then(function (data) {
        // Log the API data
        console.log('token', data);
            return data.access_token
    })
    return "Bearer " + token
}
