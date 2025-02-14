import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Event Booking App",
  description: "Generate ticket for your event with ease",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
