import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header"; // Adjust path if different

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Siyad Muhsin K | Portfolio",
  description: "Portfolio of Siyad Muhsin K, Full Stack Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white`}
      >
        {/* Header visible on all pages */}
        <Header />

        {/* Add spacing so content doesn't hide under fixed header */}
        <main className="mt-15">
          {children}
        </main>
      </body>
    </html>
  );
}
