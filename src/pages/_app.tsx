import Toast from "@/components/Toast/Toast";
import type { AppProps } from "next/app";
import { Poppins } from "next/font/google";
import { BackdropLoader } from "@/components";
import "@/styles/globals.css";
import { NextPage } from "next";
import { ReactElement, ReactNode } from "react";

export const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return getLayout(
    <div className={poppins.className}>
      <BackdropLoader />
      <Toast />
      <Component {...pageProps} />
    </div>
  );
}
