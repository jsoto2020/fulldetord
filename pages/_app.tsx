import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react'
import { PayPalScriptProvider } from '@paypal/react-paypal-js';


import { CssBaseline, Paper, ThemeProvider } from '@mui/material';
import { SWRConfig } from 'swr';

import { lightTheme } from '../themes';
import { AuthProvider, CartProvider, UiProvider } from '../context';


const imagen = '/background.png';

const styles = {
    paperContainer: {
        backgroundImage: `url(${imagen})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        height: "100%"
    }
};

function MyApp({ Component, pageProps }: AppProps) {
  

  return (
    <SessionProvider>
      <PayPalScriptProvider options={{ 'client-id': process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID || '' }}>

      
        <SWRConfig 
          value={{
            fetcher: (resource, init) => fetch(resource, init).then(res => res.json())
          }}
        >
          <AuthProvider>
            <CartProvider>
              <UiProvider>
                <Paper style={styles.paperContainer}>
                 <ThemeProvider theme={ lightTheme} > 
                    <CssBaseline />
                    
                    <Component {...pageProps} />
                 </ThemeProvider> 
                 </Paper>
              </UiProvider>
            </CartProvider>
          </AuthProvider>
        </SWRConfig>

      </PayPalScriptProvider>
    </SessionProvider>
  )
}

export default MyApp
