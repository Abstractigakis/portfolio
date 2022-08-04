import "../styles/globals.css";
import type { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";
import Layout from "@components/Layout";

import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AnimatePresence>
      <Head>
        <title>abstractigakis.io</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AnimatePresence>
  );
}

export default MyApp;
