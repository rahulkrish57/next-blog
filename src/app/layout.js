import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import { ThemeContextprovider } from "@/context/ThemeContext";
import ThemeProvider from "@/providers/ThemeProvider";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Rahul Blog App",
  description: "The best blog app!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeContextprovider>
          <ThemeProvider>
            <div className="container">
              <div className="wrapper">
                <Navbar />
                {children}
                <Footer />
              </div>
            </div>
          </ThemeProvider>
        </ThemeContextprovider>
      </body>
    </html>
  );
}
