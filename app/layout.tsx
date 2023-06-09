import "./globals.css";
import { Manrope } from "next/font/google";

const unbounded = Manrope({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={unbounded.className}>{children}</body>
    </html>
  );
}
