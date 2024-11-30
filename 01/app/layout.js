import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./globals.css";

export const metadata = {
  title: "Netflix",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <head>
    <link rel="icon" type="image/svg+xml" href="/logo.svg">
    </head>
      <body className="bg-black">
        <Navbar />
        {/* Main Content */}
        {children}
        <Footer />
      </body>
    </html>
  );
}
