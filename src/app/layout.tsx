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
        <title>Deal Soldier - Find Hidden Clearance Deals & Save Hundreds Monthly</title>
        <meta name="description" content="Join Deal Soldier to discover hidden clearance deals, get real-time alerts, and save $350+ monthly. Access exclusive tools and a supportive community of 5,000+ deal hunters." />
        <meta name="keywords" content="clearance deals, deal hunting, savings alerts, retail arbitrage, discount shopping, deal community, money saving tips, walmart deals, target clearance, costco deals, real-time alerts, deal notifications, shopping community, price tracking, deal soldier, sean sweeney" />
        <meta name="author" content="Sean Sweeney" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/images/DealSoldierLogo.jpg" type="image/jpeg" />
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
