import Document, { Head, Main, NextScript, Html } from "next/document";
import { directions } from '../locales/translation';
import { defaultLocale } from '../locales/config';

// import Manifest from 'next-manifest/manifest';
export default class NextDocument extends Document {
    render() {

        const props = this.props.__NEXT_DATA__.props;
        const lang = props ? props.initialProps.lang: defaultLocale;
        return (
            <Html lang={lang} dir={directions[lang] || 'ltr'}>
                <Head>
                    <meta charSet="utf-8" />
                    <meta
                        name="viewport"
                        content="width=device-width,minimum-scale=1,initial-scale=1"
                    />
                </Head>
                <body dir={directions[lang] || 'ltr'}>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
