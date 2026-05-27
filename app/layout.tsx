import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sai Rebbapragada | Data Engineer",
  description:
    "Portfolio of Satya Venkata Sai Rohit Rebbapragada — Data professional specializing in ETL pipelines, BI dashboards, and automated reporting solutions.",
  openGraph: {
    title: "Sai Rebbapragada | Data Engineer",
    description: "Data professional with 2+ years building ETL/ELT pipelines, BI dashboards, and automated reporting solutions.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
}
