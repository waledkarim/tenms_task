import { Inter } from "next/font/google"
import "./globals.css";
import type { Metadata } from "next";

export const inter = Inter({
  subsets: ['latin'],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "IELTS Course by Munzereen Shahid",
  description: "10 Minute School IELTS Course",
};

export default function RootLayout({ children }: { children: React.ReactNode }){
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
