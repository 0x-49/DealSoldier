import React from 'react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const videos = [
  {
    url: 'https://streamable.com/e/6pwq6s',
    id: 'v1_dealSoldier',
    title: 'How I Got 3 Laptops for $25 Each at Walmart!',
    description: 'Yes, you read that right – $25 laptops! This isn\'t clickbait. Walmart\'s hidden clearance deals are real, and I\'m showing you how to find them. Don\'t just hope for a good deal – learn how to scan for secret discounts, stock up, and save like a pro.'
  },
  {
    url: 'https://streamable.com/e/oxev7x',
    id: 'v2_dealSoldier',
    title: '90% Off Seasonal Items at Walmart – Here\'s How!',
    description: 'Seasonal clearance is great, but what if I told you there\'s an easy way to find hidden seasonal deals up to 90% off? Fall candles for $0.50, oil diffusers for under $2 – I found them, and you can too. It\'s all about using the right tools and tricks.'
  },
  {
    url: 'https://streamable.com/e/zupyv3',
    id: 'v3_dealSoldier',
    title: 'Walmart Hoodies for Under $2? Must-See Clearance Hacks!',
    description: 'Disney, Powerpuff Girls, and more – these hoodies are on Walmart shelves for $15+, but I paid less than $2 each. All it took was a little scanning and the help of tools I got through Deal Soldier.'
  },
  {
    url: 'https://streamable.com/e/cfx1lw',
    id: 'v4_dealSoldier',
    title: 'Secret Walmart Shoe Clearance You Didn\'t Know About!',
    description: 'Designer shoes like Steve Madden wedges for $12.98? Yes, it\'s possible, and I\'ll show you exactly how I uncovered these hidden Walmart gems. Using tools from Deal Soldier, I\'ve cracked the code to finding secret discounts in your local stores.'
  },
  {
    url: 'https://streamable.com/e/c98ydr',
    id: 'v5_dealSoldier',
    title: 'How I Found $98 Rugs for $3 at Walmart!',
    description: 'What if you could decorate your home with beautiful rugs and décor for less than the price of a coffee? I found rugs for $3 – yes, $3 – using insider deal-hunting strategies.'
  },
  {
    url: 'https://streamable.com/e/m1p8ok',
    id: 'v6_dealSoldier',
    title: 'Walmart 3-Cent Deals – Where to Find Them!',
    description: 'You\'ve probably heard the legend of 3-cent clearance deals at Walmart. Guess what? They\'re real, and I\'m sharing how I find them. From Jurassic World makeup kits to other surprise steals, these secret discounts are hiding in plain sight.'
  },
  {
    url: 'https://streamable.com/e/y5l9kg',
    id: 'v7_dealSoldier',
    title: 'Walmart Secrets: Hidden Clearance and Price Hacks!',
    description: 'Did you know Walmart has vacuum cleaners, karaoke machines, and Christmas items on clearance that don\'t show up in-store ads? Hidden clearance is real, and I\'m sharing how to find it.'
  },
]

export function VideoCarousel() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {videos.slice(0, 6).map((video) => (
          <div key={video.id} className="flex flex-col gap-4">
            <Card className="aspect-[9/16] relative overflow-hidden">
              <iframe
                src={`${video.url}?autoplay=0&controls=1`}
                className="w-full h-full absolute inset-0"
                allowFullScreen
                style={{
                  border: 'none',
                  width: '100%',
                  height: '100%',
                }}
              />
            </Card>
            <div className="space-y-2">
              <h3 className="text-xl font-bold leading-tight">{video.title}</h3>
              <p className="text-sm text-muted-foreground">{video.description}</p>
              <Button className="w-full" variant="default">
                Join Deal Soldier on Whop
              </Button>
            </div>
          </div>
        ))}
      </div>
      
      {/* Last video section with benefits */}
      <div className="mt-8 bg-muted/50 py-12 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left benefits column */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Why Join Deal Soldier?</h3>
            <ul className="space-y-4">
              <li className="flex gap-2">
                <span className="text-primary">✓</span>
                <span>Exclusive access to deal-finding tools worth over $200</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary">✓</span>
                <span>Real-time alerts for hidden clearance deals</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary">✓</span>
                <span>Step-by-step video tutorials on deal hunting</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary">✓</span>
                <span>Private community of expert deal finders</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary">✓</span>
                <span>Weekly live Q&A sessions with pro deal hunters</span>
              </li>
            </ul>
          </div>

          {/* Center video */}
          <div className="w-full space-y-4">
            <Card className="aspect-[9/16] relative overflow-hidden">
              <iframe
                src={`${videos[6].url}?autoplay=0&controls=1`}
                className="w-full h-full absolute inset-0"
                allowFullScreen
                style={{
                  border: 'none',
                  width: '100%',
                  height: '100%',
                }}
              />
            </Card>
            <div className="space-y-2">
              <h3 className="text-xl font-bold leading-tight">{videos[6].title}</h3>
              <p className="text-sm text-muted-foreground">{videos[6].description}</p>
              <Button className="w-full" variant="default" size="lg">
                Join Deal Soldier on Whop
              </Button>
            </div>
          </div>

          {/* Right facts column */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Did You Know?</h3>
            <ul className="space-y-4">
              <li className="flex gap-2">
                <span className="text-primary">💡</span>
                <span>Members save an average of $450/month on retail purchases</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary">💡</span>
                <span>Our tools scan over 5000+ items daily for hidden deals</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary">💡</span>
                <span>90% of clearance items never show up in store ads</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary">💡</span>
                <span>Members get first access to 3¢ deals within minutes</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary">💡</span>
                <span>Our community has saved over $2M collectively</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Comparison Grid */}
        <div className="mt-12 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-8">See The Difference</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Without Deal Soldier */}
            <Card className="p-6 space-y-4">
              <h4 className="text-xl font-semibold text-red-500">Without Deal Soldier</h4>
              <ul className="space-y-3">
                <li className="flex gap-2">
                  <span className="text-red-500">✕</span>
                  <span>Hours of manual scanning required</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-red-500">✕</span>
                  <span>Miss out on 90% of hidden deals</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-red-500">✕</span>
                  <span>No access to deal-finding tools</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-red-500">✕</span>
                  <span>Limited knowledge of store patterns</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-red-500">✕</span>
                  <span>No community support or guidance</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-red-500">✕</span>
                  <span>Wasted time on expired deals</span>
                </li>
              </ul>
            </Card>

            {/* With Deal Soldier */}
            <Card className="p-6 space-y-4 border-primary">
              <h4 className="text-xl font-semibold text-primary">With Deal Soldier</h4>
              <ul className="space-y-3">
                <li className="flex gap-2">
                  <span className="text-primary">✓</span>
                  <span>Automated tools do the work for you</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">✓</span>
                  <span>Instant notifications for best deals</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">✓</span>
                  <span>Professional deal-hunting toolkit</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">✓</span>
                  <span>Expert insights and strategies</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">✓</span>
                  <span>Active community support 24/7</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">✓</span>
                  <span>Real-time deal verification</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>

        {/* Final CTA */}
        <div className="mt-12 text-center space-y-4">
          <h3 className="text-3xl font-bold">Ready to Start Saving?</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Join thousands of smart shoppers who are already saving hundreds every month. 
            Get instant access to our complete deal-hunting toolkit and start finding 
            incredible deals today!
          </p>
          <Button size="lg" variant="default" className="mt-4">
            Join Deal Soldier on Whop
          </Button>
        </div>
      </div>
    </div>
  )
}
