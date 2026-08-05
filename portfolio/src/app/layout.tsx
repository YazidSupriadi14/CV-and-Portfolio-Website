import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Muhammad Yazid Supriadi — NLP Engineer & AI Practitioner",
  description:
    "Engineer with 4+ years of enterprise experience and hands-on NLP/Machine Learning expertise through graduate research and AI education. Based in Jakarta, Indonesia. Open to AI Engineer, Data Scientist, and Software Engineer roles.",
  keywords: [
    "NLP Engineer",
    "AI Engineer",
    "Machine Learning Engineer",
    "Data Scientist",
    "Natural Language Processing",
    "Hugging Face",
    "Python",
    "Jakarta",
    "Indonesia",
    "Portfolio",
    "Muhammad Yazid Supriadi",
  ],
  authors: [{ name: "Muhammad Yazid Supriadi", url: "https://www.linkedin.com/in/muhammad-yazid-supriadi-15a05815b/" }],
  creator: "Muhammad Yazid Supriadi",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yazidsupriadi.vercel.app",
    title: "Muhammad Yazid Supriadi — NLP Engineer & AI Practitioner",
    description:
      "Engineer with 4+ years enterprise experience and hands-on NLP/ML expertise through graduate research and AI education. 250+ students mentored. Open to remote & on-site roles.",
    siteName: "Muhammad Yazid Supriadi Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Yazid Supriadi — NLP Engineer & AI Practitioner",
    description:
      "Engineer with 4+ years enterprise experience and hands-on NLP/ML expertise through graduate research and AI education.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#050510",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <body className="bg-[#050510] text-white font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
