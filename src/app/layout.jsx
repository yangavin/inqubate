import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "InQubate",
  description:
    "InQubate is Canada's premier student-run disruptive technology startup incubator",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en " className="w-full">
      <link rel="shortcut icon" href="inqubate-logo.jpeg" type="image/x-icon" />
      <body className={`${inter.className} bg-black text-white`}>
        <img
          src="landing-morph-lines.svg"
          alt="webs"
          className="-z-50 absolute w-full"
        />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
