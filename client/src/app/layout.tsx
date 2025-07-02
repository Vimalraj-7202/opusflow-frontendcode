import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Layout from "./components/pageComponents/Layout/Layout";
import { ThemeProvider } from "./theme/ThemeContext";
// Load Geist Sans font
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

// Metadata for Next.js
export const metadata: Metadata = {
  title: "OpusFlow",
  description: "A Team Management application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={geistSans.variable}>
        <ThemeProvider>
           <Layout>
          {children}
        </Layout>
        </ThemeProvider>
       
      </body>
    </html>
  );
}
