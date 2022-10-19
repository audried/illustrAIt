import '../styles/globals.css';
import {SessionProvider} from 'next-auth/react';
import { ChakraProvider } from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/react';

const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
}

const shadows ={
  xxl: "5px 5px 15px 5px rgba(0, 0, 0, 0.1), 0 10px 10px 5px rgba(0, 0, 0, 0.04)"
}
const theme = extendTheme({ colors, shadows })


function MyApp({Component, pageProps: {session, ...pageProps}}) {
  return (
    <SessionProvider session={session}>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </SessionProvider>
  );
}

export default MyApp

