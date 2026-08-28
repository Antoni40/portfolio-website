import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

import Navbar from "./components/layout-commons/NavBar";
import Footer from "./components/layout-commons/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Moja strona portfolio",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pl"
      className={`${geistSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans text-text-primary">
        <Navbar />
        <main>
          {children}
        </main>
        <Footer/>

      </body>
    </html>
  );
}
