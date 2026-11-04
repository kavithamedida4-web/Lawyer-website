import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "UK Law Associates | Advocates & Legal Counsel",
  description: "Expert legal services – Criminal, Civil, Family, Corporate Law & more across High Courts, District Courts & Tribunals.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
