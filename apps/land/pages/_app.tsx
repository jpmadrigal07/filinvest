import * as React from "react";
import { AppProps } from "next/app";
import ReactQueryWrapper from "@/components/tanstack/ReactQueryWrapper";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ReactQueryWrapper>
      <Component {...pageProps} />
    </ReactQueryWrapper>
  );
}
