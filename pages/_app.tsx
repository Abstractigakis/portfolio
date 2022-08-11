import type { AppProps } from "next/app";
import Head from "next/head";
import "../styles/globals.css";

import { AnimatePresence } from "framer-motion";
import Layout from "@components/Layout";
import PageLoading from "@components/PageLoading";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AnimatePresence>
      <Head>
        <title>abstractigakis.io</title>
      </Head>
      {/* <PageLoading /> */}

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AnimatePresence>
  );
}

export default MyApp;
