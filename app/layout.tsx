import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

import Navbar from "@/components/layout/NavBar";
import Footer from "@/components/layout/Footer";

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
      suppressHydrationWarning
      className={`${geistSans.variable} h-full antialiased`}
    >
      <head>
      </head>
      <body className="text-text-primary flex min-h-full flex-col font-sans">
        <Script id="themeScript" strategy="beforeInteractive">
          {`
          (() => { 
            const savedTheme = localStorage.getItem("theme");
            const isSystemDarkMode = savedTheme === "dark" || 
            (!savedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches);  
            
            document.documentElement.classList.toggle("dark", isSystemDarkMode);
          })();
          `}
        </Script>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
