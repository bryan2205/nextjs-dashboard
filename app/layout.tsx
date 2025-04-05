import { montserrat } from "./ui/fonts";
import "./ui/global.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased`}>{children}</body>
      {/* <footer className="flex flex-col items-center justify-cente py-10">
        <p>made with ❤️ by Bryan</p>
      </footer> */}
    </html>
  );
}
