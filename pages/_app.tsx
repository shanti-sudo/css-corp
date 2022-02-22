import "../styles/globals.css";
import type { AppProps, NextWebVitalsMetric } from "next/app";
import { NextPage } from "next";
import { ReactElement, ReactNode } from "react";
import { AuthProvider } from "context";

export function reportWebVitals(metric: NextWebVitalsMetric) {
  console.log(metric);
}

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return <AuthProvider>{getLayout(<Component {...pageProps} />)}</AuthProvider>;
}

export default MyApp;
