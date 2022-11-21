import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import styles from '../../styles/Dash.module.css';
import {
  Text,
  Modal,
  ModalContent,
  ModalOverlay,
  ModalHeader,
  ModalBody,
  ModalCloseButton
} from '@chakra-ui/react';

export function Venmo(props) {

    return (
        <Modal className={styles.glass} isOpen={props.isOpen} onClose={props.onClose}>
            <ModalOverlay/>
            <ModalContent>
                    <ModalHeader>Generating images costs us money, so we have to limit you to one per day. Please check back after midnight EST!</ModalHeader>
                    <ModalCloseButton />
                    {/* Change to true or remove conditional for Venmo integration.  */}
                    {false && <ModalBody>
                        <Text>
                            If you really want another image, you can Venmo us a dollar and we&#39;ll generate another 2 images for you!
                        </Text>
                        <div style={{paddingTop: "2vh"}}>
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
                        </div>
                    </ModalBody>}
            </ModalContent>
        </Modal>
    )

}
