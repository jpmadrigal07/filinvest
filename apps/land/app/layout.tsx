import "../styles/globals.css";
import MainFooter from "@/components/footer/MainFooter";
import MainNavigation from "@/components/navigation/MainNavigation";
import * as React from "react";
import ReactQueryWrapper from "@/components/tanstack/ReactQueryWrapper";
import { FAVICON_NAME, WEB_TITLE } from "@/helpers/constants";

export const metadata = {
  title: WEB_TITLE,
  description: WEB_TITLE,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <link rel="icon" type="image/x-icon" href={`/${FAVICON_NAME}`} />
      <body>
        <ReactQueryWrapper>
          <MainNavigation />
          <main>{children}</main>
          <MainFooter />
        </ReactQueryWrapper>
      </body>
    </html>
  );
}
