import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL('https://uklawfirm.in'),
  title: {
    default: "UK Law Firm | Advocates & Legal Counsel — Hyderabad",
    template: "%s | UK Law Firm — Hyderabad",
  },
  description: "Trusted courtroom advocates and legal defense counsel with chambers in Gachibowli, Hyderabad. Representing clients across High Court of Telangana, District Courts, RERA & Tribunals.",
  keywords: [
    "UK Law Firm",
    "Advocates in Hyderabad",
    "High Court of Telangana lawyers",
    "Criminal defense Hyderabad",
    "Bail lawyer Gachibowli",
    "Civil litigation Telangana",
    "RERA advocate Hyderabad",
    "Corporate legal advisor Hyderabad"
  ],
  authors: [{ name: "UK Law Firm" }],
  creator: "UK Law Firm",
  icons: {
    icon: "/favicon.ico",
    apple: "/uk-emblem-gold.png",
  },
  openGraph: {
    title: "UK Law Firm | Advocates & Legal Counsel — Hyderabad",
    description: "Trusted courtroom advocates and legal defense counsel with chambers in Gachibowli, Hyderabad. Representing clients across High Court of Telangana, District Courts, RERA & Tribunals.",
    url: "https://uklawfirm.in",
    siteName: "UK Law Firm",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/uk-law-firm-partners.jpg",
        width: 1200,
        height: 630,
        alt: "UK Law Firm Senior Advocates Chambers — Hyderabad",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "UK Law Firm | Advocates & Legal Counsel — Hyderabad",
    description: "Trusted courtroom advocates and legal defense counsel with chambers in Gachibowli, Hyderabad.",
    images: ["/uk-law-firm-partners.jpg"],
  },
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
