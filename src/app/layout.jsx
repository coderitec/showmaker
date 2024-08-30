import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from './components/Footer'
import { SidebarProvider } from "./providers";

const poo = Poppins({ subsets: ["latin"] , weight: ['400']});

export const metadata = {
  title: "Create a movie app",
  description: "A movie application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poo.className}>
        <SidebarProvider>

        <Navbar />
        <div className="min-h-screen">

        {children}
        </div>

        <Footer />
        </SidebarProvider>
        </body>
    </html>
  );
}
