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
      suppressHydrationWarning
      className={`${geistSans.variable} h-full antialiased`}
    >
      <head>
        {/*Not the best think in the world but works.*/}
        <script>
          const isDarkMode = localStorage.getItem("theme") === "dark";
          const isSystemDarkMode = localStorage.getItem("theme") == null && 
          window.matchMedia("(prefers-color-scheme: dark)").matches;

          isDarkMode || isSystemDarkMode ? 
            document.documentElement.classList.add("dark") :
            document.documentElement.classList.remove("dark");
        </script>
      </head>
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
