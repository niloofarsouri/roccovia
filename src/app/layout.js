import MyFooter from "@/components/footer";
import "./globals.css";



export const metadata = {
  title: "Create My Bussiness Website",
  description: "Roccovia is My Brand in Architecture and Design",
};



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body>

        {children}
        <MyFooter />

      </body>

    </html>
  );
}
