import "./globals.css";

export const metadata = {
  title: "Next.js App",
  description: "A Next.js app using the App Router",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-ivory flex flex-col items-center">{children}</body>
    </html>
  );
}
