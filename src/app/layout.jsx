import localFont from "next/font/local";
import NavBar from "@/app/Components/NavBar";
import Header from "@/app/Components/Header";
import Footer from "@/app/Components/Footer";
import "./globals.css";

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
    <html lang="en">
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
