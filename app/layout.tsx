import type { Metadata, Viewport } from "next";
import { Inter, Saira_Condensed } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-inter",
  display: "swap",
});

const saira = Saira_Condensed({
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
  variable: "--font-saira",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://canchasbosquemar.cl"),
  title: "Canchas Bosquemar — Reserva, juega, gana",
  description:
    "Arrienda tu cancha de futbolito techada en la Población Bosquemar, Puerto Montt. Reserva online, paga seguro y arma tu pichanga.",
  icons: {
    icon: [
      { url: "/assets/favicon/favicon.ico" },
      { url: "/assets/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/assets/favicon/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/assets/favicon/apple-icon-180x180.png",
  },
  openGraph: {
    title: "Canchas Bosquemar — Reserva, juega, gana",
    description: "Arrienda tu cancha de futbolito en Puerto Montt. Reserva online y arma tu pichanga.",
    images: ["/assets/logo/cdb-horizontal-oscuro.png"],
    type: "website",
    locale: "es_CL",
  },
};

export const viewport: Viewport = {
  themeColor: "#063b34",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${inter.variable} ${saira.variable}`}>
      <body>{children}</body>
    </html>
  );
}
