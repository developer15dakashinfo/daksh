import { Geist, Geist_Mono } from "next/font/google";
import { Roboto } from "next/font/google";
import "./globals.css";

// Import the fonts and define variables for each one
const geistSans = Geist({
  variable: "--font-geist-sans",  // Custom variable for Geist Sans font
  subsets: ["latin"],  // Language subset
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",  // Custom variable for Geist Mono font
  subsets: ["latin"],  // Language subset
});

const roboto = Roboto({
  variable: "--font-roboto",  // Custom variable for Roboto font
  subsets: ["latin"],  // Language subset
  weight: ["100", "300", "400", "500", "700", "900"],  // Different font weights
  style: ["normal", "italic"],  // Styles to include
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${roboto.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
