import { ThemeProvider } from "@/components/theme-provider"
import React from 'react'
import '@/app/globals.css'

interface LayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <title>JoinDealSoldier - Your Ultimate Clearance Deal Hunting Community | Save $350+ Monthly</title>
        <meta name="description" content="Join the JoinDealSoldier community to access exclusive clearance deals, instant alerts, and proven strategies. Save $350+ monthly with our premium tools and 5,000+ active deal hunters." />
        <meta name="keywords" content="JoinDealSoldier, clearance deals, deal hunting, savings alerts, retail arbitrage, discount shopping, deal community, money saving tips, walmart deals, target clearance, costco deals, real-time alerts, deal notifications, shopping community, price tracking, sean sweeney" />
        <meta name="author" content="Sean Sweeney" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <link rel="icon" href="/images/DealSoldierLogo.jpg" type="image/jpeg" />
        <link rel="canonical" href="https://joindealsoldier.com" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="JoinDealSoldier - Your Ultimate Clearance Deal Hunting Community" />
        <meta property="og:description" content="Join the JoinDealSoldier community to access exclusive clearance deals, instant alerts, and proven strategies. Save $350+ monthly with our premium tools." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://joindealsoldier.com" />
        <meta property="og:image" content="https://joindealsoldier.com/images/DealSoldierLogo.jpg" />
        <meta property="og:site_name" content="JoinDealSoldier" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="JoinDealSoldier - Ultimate Deal Hunting Community" />
        <meta name="twitter:description" content="Access exclusive clearance deals, instant alerts, and proven strategies. Join 5,000+ active deal hunters today!" />
        <meta name="twitter:image" content="https://joindealsoldier.com/images/DealSoldierLogo.jpg" />
        
        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "JoinDealSoldier",
            "url": "https://joindealsoldier.com",
            "logo": "https://joindealsoldier.com/images/DealSoldierLogo.jpg",
            "description": "Your Ultimate Clearance Deal Hunting Community",
            "founder": {
              "@type": "Person",
              "name": "Sean Sweeney"
            },
            "sameAs": [
              "https://facebook.com/joindealsoldier",
              "https://twitter.com/joindealsoldier",
              "https://instagram.com/joindealsoldier"
            ]
          })}
        </script>
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-16673579150"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-16673579150');
            `
          }}
        />
      </head>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
