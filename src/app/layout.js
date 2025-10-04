import MyFooter from "@/components/footer";
import "./globals.css";
import MyHeader from "@/components/header/inex";
import { sahel } from 'next-persian-fonts/sahel'
import HeaderBurger from "@/components/headerBurger";
// import { vazirMatn } from 'next-persian-fonts/vazirmatn'
// import localFont from 'next/font/local';


export const metadata = {
  title: "Create My Bussiness Website",
  description: "Roccovia is My Brand in Architecture and Design",
};



export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="rtl">

      <body className={sahel.className}>

        <HeaderBurger />

        <MyHeader />
        {children}
        <MyFooter />

      </body>

    </html>
  );
}
