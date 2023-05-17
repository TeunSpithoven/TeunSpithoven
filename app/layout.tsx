import { Metadata } from 'next';
import '../styles/globals.css';

export const metadata: Metadata = {
    title: "Teun Spithoven",
    description: "Teun Spithoven",
    viewport: "width=device-width, initial-scale=1",
  };

export default function RootLayout({
    // Layouts must accept a children prop.
    // This will be populated with nested layouts or pages
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <html lang="en">
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <body className="bg-white dark:bg-black text-black dark:text-white">{children}</body>
      </html>
    );
  }