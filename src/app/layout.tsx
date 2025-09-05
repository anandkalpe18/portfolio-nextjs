import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "Anand Kalpe — Portfolio",
  description: "Portfolio of Anand Kalpe",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <a className="sr-only focus:not-sr-only block p-2" href="#main">
          Skip to content
        </a>
        <Navbar />
        <main id="main" className="max-w-6xl mx-auto px-4 py-8">
          {children}
        </main>
      </body>
    </html>
  );
}
