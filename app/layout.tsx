import type { Metadata } from "next";
import { Geist, Geist_Mono, Roboto, Poetsen_One, Josefin_Sans, Poppins } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

const poetsenOne = Poetsen_One({
  variable: "--font-poetsen-one",
  subsets: ["latin"],
  weight: '400'
});

const josefinSans = Josefin_Sans({
  variable: '--font-josefin-sans',
  subsets: ["latin"],
})
const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ["latin"],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})

export const metadata: Metadata = {
  title: "Formations en Maquillage et Onglerie - Joelle",
  description: "Découvrez les formations professionnelles en maquillage et onglerie proposées par [Nom de la cliente]. Apprenez les techniques modernes pour révéler votre beauté.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${roboto.variable} ${poetsenOne.variable} ${josefinSans.variable} ${poppins.variable}  antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
