import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Top from "./components/Top";
import "./globals.css";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="max-md:hidden md:block">
          <Top />
        </div>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}