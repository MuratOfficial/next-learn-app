import './globals.css';

import {Inter} from "next/font/google"

const inter = Inter({
  subsets:["cyrillic"]
})




export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}