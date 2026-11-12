import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "UK Law Firm | Advocates & Legal Counsel — Hyderabad",
  description: "Expert legal defense and counsel – Criminal, Civil, Family, Corporate Law, RERA & more across High Court of Telangana, District Courts & Tribunals.",
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
