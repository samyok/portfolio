import Document, { Head, Html, Main, NextScript } from "next/document";
import { constants } from "../config";

export default class MyDocument extends Document {
  render() {
    return (
      <Html
        lang={"en"}
        style={{
          scrollBehavior: "smooth",
        }}>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={"true"} />
          <link rel="preload" as="style" crossOrigin={"true"} href={constants.fontURI} />
          <link href={constants.fontURI} rel="stylesheet" />
          <meta name="theme-color" content="#F0F0F0" />

          <script
            async
            defer
            data-website-id="f5572f62-a934-4108-aa6c-677f32b8fcb2"
            data-host-url="https://a.samyok.us"
            data-domains={"yok.dev"}
            src="/a.js"
          />
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="theme-color" content="#ffffff" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
