import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingMobileBar from "@/components/FloatingMobileBar";
import LeadMagnetModal from "@/components/LeadMagnetModal";
import { config } from "@/lib/config";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bombaystudio.in"),
  title: {
    default: "Bombay Studio | Luxury Architecture & Interior Design in Mumbai",
    template: "%s | Bombay Studio",
  },
  description:
    "Bombay Studio is a premier luxury interior design & architecture firm in Mumbai. Specialized in high-end residential homes, villas, turnkey interiors & commercial spaces.",
  keywords: [
    "interior designers in Mumbai",
    "luxury interior design Mumbai",
    "turnkey interior contractor Mumbai",
    "architecture firm Mumbai",
    "modular kitchen design",
    "2BHK interior cost Mumbai",
    "Kalpataru Magnus interior",
    "villa interior design Mumbai",
  ],
  authors: [{ name: "Bombay Studio" }],
  openGraph: {
    title: "Bombay Studio | Luxury Architecture & Interior Design in Mumbai",
    description:
      "Designing timeless, high-end residential and commercial spaces across Mumbai.",
    url: "https://bombaystudio.in/",
    siteName: "Bombay Studio",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=85",
        width: 1200,
        height: 630,
        alt: "Bombay Studio Luxury Interiors",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bombay Studio | Luxury Interior Architecture Mumbai",
    description: "Designing timeless spaces across Mumbai.",
    images: [
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=85",
    ],
  },
  alternates: {
    canonical: "https://bombaystudio.in/",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const gaId = config.analytics.gaMeasurementId;

  return (
    <html
      lang="en-IN"
      className={`${playfair.variable} ${dmSans.variable} scroll-smooth`}
    >
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />

        {/* Google Analytics 4 Tag (gtag.js) */}
        {gaId && (
          <>
            <Script
              strategy="afterInteractive"
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
            />
            <Script
              id="google-analytics"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${gaId}');
                `,
              }}
            />
          </>
        )}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "InteriorDesignFirm",
              name: "Bombay Studio",
              url: "https://bombaystudio.in/",
              logo: "https://bombaystudio.in/logo.svg",
              description:
                "Premier luxury interior design and turnkey architecture studio in Mumbai.",
              areaServed: [
                "Mumbai",
                "South Mumbai",
                "Bandra",
                "Juhu",
                "Worli",
                "Thane",
                "Navi Mumbai",
                "Alibaug",
              ],
              address: {
                "@type": "PostalAddress",
                addressLocality: "Mumbai",
                addressRegion: "Maharashtra",
                addressCountry: "IN",
              },
              telephone: "+919664384181",
              email: "info@bombaystudio.in",
              priceRange: "₹₹₹₹",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "52",
              },
            }),
          }}
        />
      </head>
      <body className="min-h-screen bg-[#050505] text-white antialiased selection:bg-[#D4AF37] selection:text-[#050505]">
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingMobileBar />
        <LeadMagnetModal />
      </body>
    </html>
  );
}
