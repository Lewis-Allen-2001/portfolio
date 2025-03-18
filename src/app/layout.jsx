import localFont from "next/font/local"
import NavBar from "@/app/components/NavBar"
import Header from "@/app/components/Header"
import Footer from "@/app/components/Footer"
import "./globals.css";
import { ThemePanel } from "@radix-ui/themes";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Portfolio of Lewis Allen",
  description: "Portfolio of Lewis Allen's work",
};

export default function RootLayout({ children }) {
  return (
    <html suppressHydrationWarning lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
             <Header/>
             <NavBar/>
            {children}
        <Footer />
      </body>
    </html>
  ); 
}
