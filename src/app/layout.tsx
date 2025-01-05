import { ThemeProvider } from "@/components/theme-provider"
import React from 'react'
import '@/styles/globals.css'

interface LayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: LayoutProps) {
  React.useEffect(() => {
    // Add meta tags dynamically
    document.title = 'Deal Soldier - Find Hidden Clearance Deals & Save Hundreds Monthly'
    
    const metaTags = [
      { name: 'description', content: 'Join Deal Soldier to discover hidden clearance deals, get real-time alerts, and save $350+ monthly. Access exclusive tools and a supportive community of 5,000+ deal hunters.' },
      { name: 'keywords', content: 'clearance deals, deal hunting, savings alerts, retail arbitrage, discount shopping, deal community, money saving tips, walmart deals, target clearance, costco deals, real-time alerts, deal notifications, shopping community, price tracking, deal soldier, sean sweeney' },
      { name: 'author', content: 'Sean Sweeney' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://dealsoldier.com' },
      { property: 'og:title', content: 'Deal Soldier - Find Hidden Clearance Deals & Save Hundreds Monthly' },
      { property: 'og:description', content: 'Join Deal Soldier to discover hidden clearance deals, get real-time alerts, and save $350+ monthly. Access exclusive tools and a supportive community of 5,000+ deal hunters.' },
      { property: 'og:image', content: '/og-image.jpg' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:creator', content: '@superunsexy' },
      { name: 'twitter:title', content: 'Deal Soldier - Find Hidden Clearance Deals & Save Hundreds Monthly' },
      { name: 'twitter:description', content: 'Join Deal Soldier to discover hidden clearance deals, get real-time alerts, and save $350+ monthly. Access exclusive tools and a supportive community of 5,000+ deal hunters.' },
      { name: 'twitter:image', content: '/twitter-image.jpg' },
      { name: 'robots', content: 'index, follow' },
      { name: 'googlebot', content: 'index, follow, max-video-preview:-1, max-image-preview:large, max-snippet:-1' },
    ]

    metaTags.forEach(tag => {
      const meta = document.createElement('meta')
      Object.entries(tag).forEach(([key, value]) => {
        meta.setAttribute(key, value)
      })
      document.head.appendChild(meta)
    })

    // Add schema.org structured data
    const structuredData = [
      {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "Deal Soldier",
        "url": "https://dealsoldier.com",
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://dealsoldier.com/search?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Deal Soldier",
        "url": "https://dealsoldier.com",
        "logo": "https://dealsoldier.com/logo.png",
        "sameAs": [
          "https://www.instagram.com/superunsexy",
          "https://www.youtube.com/@SuperUnsexy",
          "https://facebook.com/superunsexy"
        ],
        "founder": {
          "@type": "Person",
          "name": "Sean Sweeney"
        }
      }
    ]

    structuredData.forEach(data => {
      const script = document.createElement('script')
      script.type = 'application/ld+json'
      script.text = JSON.stringify(data)
      document.head.appendChild(script)
    })

    // Add preconnect links
    const preconnectLinks = [
      'https://fonts.googleapis.com',
      'https://fonts.gstatic.com'
    ]

    preconnectLinks.forEach(href => {
      const link = document.createElement('link')
      link.rel = 'preconnect'
      link.href = href
      if (href.includes('gstatic')) {
        link.crossOrigin = 'anonymous'
      }
      document.head.appendChild(link)
    })

    // Add favicon links
    const faviconLinks = [
      { rel: 'icon', href: '/favicon.ico' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
      { rel: 'manifest', href: '/site.webmanifest' }
    ]

    faviconLinks.forEach(linkData => {
      const link = document.createElement('link')
      Object.entries(linkData).forEach(([key, value]) => {
        link.setAttribute(key, value)
      })
      document.head.appendChild(link)
    })
  }, [])

  return (
    <div className="min-h-screen">
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        enableSystem={false}
        disableTransitionOnChange
      >
        {children}
      </ThemeProvider>
    </div>
  )
}
