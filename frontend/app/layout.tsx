import "./globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({ weight: ["400", "500", "800"], subsets: ["latin"] });

export const metadata = {
  title: "Todo App",
  description: "Todo App description",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
