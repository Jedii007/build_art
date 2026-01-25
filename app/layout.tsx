import "./globals.css";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import Footer from "components/layout/Footer";
import Header from "components/layout/Header";
import SmoothScroll from "components/animations/SmoothScroll";

export const metadata: Metadata = {
  title: {
    default: "BuildArt Global",
    template: "BuildArt Global | %s",
  },
  icons: {
    icon: "/assets/images/Build-art-global-logo-02-1.png",
  },
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=manrope@200,300,400,500,600,700,800&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://api.fontshare.com/v2/css?f[]=cabinet-grotesk@100,200,300,400,500,700,800,900&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://unpkg.com/splitting@1.0.6/dist/splitting.css"
        />
      </head>
      <body>
        <SmoothScroll />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
