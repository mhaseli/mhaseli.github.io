import type { Metadata } from "next";
import { Source_Sans_3, Fraunces } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import { clsx } from "clsx";

const sourceSans = Source_Sans_3({ subsets: ["latin"], variable: "--font-sans" });
const fraunces = Fraunces({ subsets: ["latin"], variable: "--font-serif", axes: ["SOFT", "WONK", "opsz"] });

const siteUrl = "https://mhaseli.github.io";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Masih Haseli - Postdoctoral Scholar at Caltech",
    template: "%s | Masih Haseli",
  },
  description: "Academic website of Masih Haseli, Postdoctoral Scholar at Caltech. Research in Koopman operator theory, data-driven control, dynamical systems, and robotics.",
  keywords: [
    "Masih Haseli",
    "Postdoctoral Scholar",
    "Caltech",
    "Koopman operator",
    "Control theory",
    "Dynamical systems",
    "Machine learning",
    "Data-driven control",
    "Robotics",
    "EDMD",
    "Extended Dynamic Mode Decomposition",
  ],
  authors: [{ name: "Masih Haseli", url: siteUrl }],
  creator: "Masih Haseli",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Masih Haseli - Academic Website",
    title: "Masih Haseli - Postdoctoral Scholar at Caltech",
    description: "Research in Koopman operator theory, data-driven control, dynamical systems, and robotics.",
    images: [
      {
        url: "/images/profile_photo.png",
        width: 400,
        height: 400,
        alt: "Masih Haseli",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Masih Haseli - Postdoctoral Scholar at Caltech",
    description: "Research in Koopman operator theory, data-driven control, dynamical systems, and robotics.",
    images: ["/images/profile_photo.png"],
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
  alternates: {
    canonical: `${siteUrl}/`,
  },
  verification: {
    // Add your Google Search Console verification code here if you have one
    // google: "your-google-verification-code",
  },
};

// JSON-LD structured data for Google
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Masih Haseli",
  url: siteUrl,
  image: `${siteUrl}/images/profile_photo.png`,
  jobTitle: "Postdoctoral Scholar",
  worksFor: {
    "@type": "Organization",
    name: "California Institute of Technology",
    url: "https://www.caltech.edu",
  },
  alumniOf: {
    "@type": "Organization",
    name: "University of California San Diego",
    url: "https://ucsd.edu",
  },
  knowsAbout: [
    "Koopman Operator Theory",
    "Control Theory",
    "Dynamical Systems",
    "Machine Learning",
    "Robotics",
    "Data-Driven Methods",
  ],
  sameAs: [
    "https://scholar.google.com/citations?hl=en&user=Am-rcgMAAAAJ",
    "https://www.linkedin.com/in/masih-haseli/",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={clsx(
          sourceSans.variable,
          fraunces.variable,
          "antialiased bg-background text-foreground min-h-screen flex flex-col font-sans transition-colors duration-300"
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="flex-grow pt-20 px-6 max-w-5xl mx-auto w-full">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
