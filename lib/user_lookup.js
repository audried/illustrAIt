// Load the AWS SDK for Node.js
var AWS = require('aws-sdk');
// Set the region 
AWS.config.update({region: 'us-east-1'});

// Create the DynamoDB service object
var ddb = new AWS.DynamoDB({apiVersion: '2012-08-10'});
let docClient = new AWS.DynamoDB.DocumentClient();

export async function userLookup(email) {
    console.log("Looking up email: ", email)
    var params = {
        TableName: 'illustrait_daily_use',
        Key: {
            'email': email
        }
    };

    // Call DynamoDB to read the item from the table
    const data = await docClient.get(params).promise()
    console.log(data)
    return data.Item
}

export async function paymentLookup(order_id) {
    try {
        console.log("Looking up order: ", order_id)
        var params = {
            TableName: 'illustrait_payment',
            Key: {
                'order_id': order_id
            }
        };

        // Call DynamoDB to read the item from the table
        const data = await docClient.get(params).promise()
        console.log(data)
        return data.Item
    } catch (e) {
        console.log(e)
        throw e
    }
}
export async function putUser(email, image_urls) {
    console.log("Putting email: ", email)
    var params = {
        TableName: "illustrait_daily_use",
        Item:  {
            "email": email,
            "hasUsed": true,
            "image_urls": image_urls
        }
    };

    // Call DynamoDB to read the item from the table
    const data = await docClient.put(params).promise()
    return data
}

export async function putPayment(order_id) {
    console.log("Putting order: ", order_id)
    var params = {
        TableName: "illustrait_payment",
        Item:  {
            "order_id": order_id
        }
    };

    // Call DynamoDB to read the item from the table
    const data = await docClient.put(params).promise()
    return data
}

export async function modifyHasUsed(email) {
    try {
        var params = {
            TableName: "illustrait_daily_use",
            Key: { "email": email },
            UpdateExpression: "set hasUsed = :hasUsed",
            ExpressionAttributeValues: {
                ":hasUsed": false,
            },
            ReturnValues: "UPDATED_NEW"

        };

        const data = await docClient.update(params).promise()
        return JSON.stringify(data)
    } catch (e) {
        throw e
    }
}