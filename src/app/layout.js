import { Geist, Geist_Mono } from "next/font/google";
import { Montserrat } from "next/font/google";
import "./globals.css";
import RootProvider from "@/Components/RootProvider";
import { CartProvider } from "@/app/Context/CartContext";
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";


const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100","200","300","400","500","600","700","800","900"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "OxoLife",
  description: "Respiratory e-commerce",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body
        suppressHydrationWarning={true}
        className={`${montserrat.className}`}
      >
        <RootProvider>
          <CartProvider>
            <Header/>
              { children }
            <Footer/>
          </CartProvider>
        </RootProvider>

      </body>
    </html>
  );
}
