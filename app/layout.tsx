import "./globals.css";
import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Build with Hannah",
  description:
    "A real-time rebuild story: career reset, disciplined habits, and honest progress with Hannah and Luna.",
  openGraph: {
    title: "Build with Hannah",
    description:
      "A real-time rebuild story: career reset, disciplined habits, and honest progress.",
    type: "website",
    images: ["/assets/images/hannah-luna.jpeg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Build with Hannah",
    description:
      "A real-time rebuild story: career reset, disciplined habits, and honest progress.",
    images: ["/assets/images/hannah-luna.jpeg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="dark">
      <body>
        <a className="skip-link" href="#main">Skip to content</a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
