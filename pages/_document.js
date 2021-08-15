import Document, {Head, Html, Main, NextScript} from "next/document";

export default class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <script
                        async
                        defer
                        data-website-id="f5572f62-a934-4108-aa6c-677f32b8fcb2"
                        data-host-url="https://a.samyok.us"
                        src="/a.js"
                    />

                </Head>
                <body>
                <Main/>
                <NextScript/>
                </body>
            </Html>
        );
    }
}

