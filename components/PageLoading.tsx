import { Router } from "next/router";
import { FC, useState } from "react";
import NProgress from "nprogress";
import Head from "next/head";

export interface IPageLoadingProps {
  loading: boolean;
}

const PageLoading: FC = () => {
  const [loading, setLoading] = useState(false);

  Router.events.on("routeChangeStart", (url: any) => {
    setLoading(true);
    NProgress.start();
  });

  Router.events.on("routeChangeComplete", (url: any) => {
    NProgress.done();
    setLoading(false);
  });

  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"
          integrity="sha512-42kB9yDlYiCEfx2xVwq0q7hT4uf26FUgSIZBK8uiaEnTdShXjwr8Ip1V4xGJMg3mHkUt9nNuTDxunHF0/EgxLQ=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </Head>
    </>
  );
};

export default PageLoading;
