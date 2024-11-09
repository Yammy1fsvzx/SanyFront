import type { Metadata } from "next";
import "./globals.css";
import backgroundImage from "./assets/globals/bg.png";
import Header from "./components/common/header/header";
import Footer from "./components/common/footer/footer";

export const metadata: Metadata = {
  title: "SanyWatches",
  description: "SunyWatches is a premium Swiss watch and exclusive jewelry store. We offer our clients only the best examples of watchmaking and jewelry art, combining long-standing traditions and modern trends.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{ backgroundImage: `url(${backgroundImage})` }}>
      <Header />
        {children}
      <Footer selectedLanguage="Русский"/>
      </body>
    </html>
  );
}