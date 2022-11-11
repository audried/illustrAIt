import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import {
  Flex,
  Box,
  Container,
  useColorModeValue,
  Heading,
  VStack,
  Text,
  Button
} from '@chakra-ui/react';

export function Venmo(props) {

    return (
        <> 
            <VStack
                borderWidth="1px"
                borderRadius="lg"
                borderEndColor={"whitesmoke"}
                w={{sm: '85%', md: '540px' }}
                height={{ base:'11rem', sm: '9.4rem', md: '9.4rem' }}
                direction={{ base: 'column', md: 'row' }}
                boxShadow={'2xl'}
                padding={4}
                style={{background: "rgba(256, 256, 256, 0.8)"}}>
                <Heading size={"large"}>
                    Want a better prompt or picture? Venmo us $1 and we'll generate you some new ones.
                </Heading>
                <Text as={'span'} color={'black'} >
                    If you don't want to pay, you can always generate new pictures for free tomorrow!
                </Text>
                <Box width={{base:'100%', sm: '90%', md: '70%' }}>
                    <PayPalScriptProvider style={{width: "100%", height:"100%"}} options={{ "enable-funding":"venmo", "currency": "USD", "components": "buttons,funding-eligibility", "client-id": "AdJ1KVzaTxZ_QSvsdByZ1z6AdUNBrbafSjIP0YsBIbd31kSYIhu9YShEIXd2oUETeM14SqPNflvSxn4u" }}>
                        <PayPalButtons fundingSource="venmo" style={{ width:"100%", layout: "horizontal" }} 
                            createOrder={(data, actions) => {
                                return actions.order.create({
                                    purchase_units: [
                                        {
                                            amount: {
                                                value: "0.03",
                                            },
                                        },
                                    ],
                                });
                            }}
                            onApprove={(data, actions) => {
                                return actions.order.capture().then((details) => {
                                    const name = details.payer.email_address;
                                    props.validatePayment(details.id)
                                    alert(`Transaction completed by ${name}`);
                                });
                            }} >
                            {/* <InEligibleError text="You are not eligible to pay with Venmo." /> */}
                        </PayPalButtons>
                    </PayPalScriptProvider>
                </Box>
            </VStack>
        </>
    )

}
