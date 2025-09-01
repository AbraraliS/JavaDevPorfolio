import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { JetBrains_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Suspense } from "react"

const JetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist-mono", // keep variable name to match globals.css
})

export const metadata: Metadata = {
  metadataBase: new URL("https://your-portfolio.example.com"),
  title: {
  default: "Abrar Ali — Fresher Software Developer | Java Developer",
  template: "%s | Abrar Ali",
  },
  description:
  "Portfolio of Abrar Ali — Fresher Software Developer / Java Developer. I build REST APIs, backend systems, and solve coding challenges.",
  generator: "v0.app",
  keywords: ["Java", "Spring Boot", "REST APIs", "Backend Developer", "Fresher", "Software Developer"],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://your-portfolio.example.com",
  siteName: "Abrar Ali — Java Developer",
  title: "Abrar Ali — Fresher Software Developer | Java Developer",
    description: "I build REST APIs, backend systems, and solve coding challenges.",
    images: [
      {
        url: "/portfolio-open-graph-banner.png",
        width: 1200,
        height: 630,
  alt: "Abrar Ali — Java Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  title: "Abrar Ali — Java Developer",
    description: "Fresher Software Developer specialized in Java & Spring Boot.",
    images: ["/portfolio-open-graph-banner.png"],
  },
  alternates: { canonical: "/" },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${GeistSans.variable} ${JetBrainsMono.variable} antialiased`}>
      <body className="font-sans min-h-screen">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <Suspense fallback={null}>
            {children}
            <Analytics />
          </Suspense>
        </ThemeProvider>
      </body>
    </html>
  )
}
