import { height } from '@mui/system';
import Document, { DocumentContext, Html, Head, Main, NextScript } from 'next/document';


class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const initalProps = await Document.getInitialProps(ctx)

        return initalProps
    }

    render() {
        return (
            <Html>
                <Head>
                    <link
                        rel="stylesheet"
                        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
                    />
                     <link rel="shortcut icon" href="/favicon.ico" sizes="100x100" /> 
                </Head>
                <body>
                    <Main />
                    
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument;