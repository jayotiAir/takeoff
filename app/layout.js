import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import LiveChatWidget from "./components/LiveChatWidget";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Home - Takeoff Monkey",
  description: "Takeoff Monkey",
    icons: {
    icon: "/images/TakeOff-Monkey-Icon.svg", // ✅ Your custom icon path
  },

};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
        <LiveChatWidget/>
      </body>
    </html>
  );
}
