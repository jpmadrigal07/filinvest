import "../styles/globals.css";
import MainFooter from "@/components/footer/MainFooter";
import MainNavigation from "@/components/navigation/MainNavigation";
import * as React from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <MainNavigation />
        <main>{children}</main>
        <MainFooter />
      </body>
    </html>
  );
}
