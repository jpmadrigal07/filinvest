import "../styles/globals.css";
import MainFooter from "@/components/footer/MainFooter";
import MainNavigation from "@/components/navigation/MainNavigation";
import * as React from "react";
import ReactQueryWrapper from "@/components/tanstack/ReactQueryWrapper";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
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
