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
  }
]

const ctaVariations = [
  "Join Deal Soldier on Whop",
  "Start Saving with Deal Soldier",
  "Get Access to Deal Soldier",
  "Unlock Deal Soldier Now",
  "Join the Deal Hunting Pros",
  "Start Your Savings Journey",
  "Become a Deal Soldier"
];

export const VideoCarousel = () => {
  const mainVideos = videos.slice(0, 6);
  const lastVideo = videos[6];

  return (
    <section className="py-16 px-4 md:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-center mb-12">🎥 See Real Deals in Action</h2>
      
      {/* Main grid for first 6 videos */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
        {mainVideos.map((video, index) => (
          <Card key={video.id} className="p-4 space-y-4">
            <div className="aspect-[9/16] w-full">
              <iframe
                src={video.url}
                width="100%"
                height="100%"
                frameBorder="0"
                allowFullScreen
                title={`Video: ${video.title}`}
                className="rounded-lg"
              />
            </div>
            <div className="space-y-3">
              <h3 className="text-xl font-bold">{video.title}</h3>
              <p className="text-muted-foreground">{video.description}</p>
              <a 
                href="https://whop.com/deal-soldier/?a=digitalartlab" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded-lg font-semibold text-base w-full text-center"
              >
                {ctaVariations[index % ctaVariations.length]}
              </a>
            </div>
          </Card>
        ))}
      </div>

      {/* Last video with sales copy */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {/* Left sales copy */}
        <div className="lg:flex flex-col justify-center space-y-8 bg-muted/30 p-8 rounded-lg">
          <h3 className="text-3xl font-bold">💎 Exclusive Member Benefits</h3>
          <ul className="space-y-6">
            <li className="flex items-start gap-3">
              <span className="text-primary text-xl mt-1">✓</span>
              <span className="text-lg">First access to hidden clearance deals worth up to 90% off retail prices</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary text-xl mt-1">✓</span>
              <span className="text-lg">Instant notifications for price drops and hidden markdowns at your favorite stores</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary text-xl mt-1">✓</span>
              <span className="text-lg">Premium deal-finding tools worth $200+ to find deals others miss</span>
            </li>
          </ul>
        </div>

        {/* Centered last video */}
        <Card className="p-4 space-y-4">
          <div className="aspect-[9/16] w-full">
            <iframe
              src={lastVideo.url}
              width="100%"
              height="100%"
              frameBorder="0"
              allowFullScreen
              title={`Video: ${lastVideo.title}`}
              className="rounded-lg"
            />
          </div>
          <div className="space-y-3">
            <h3 className="text-xl font-bold">{lastVideo.title}</h3>
            <p className="text-muted-foreground">{lastVideo.description}</p>
            <a 
              href="https://whop.com/deal-soldier/?a=digitalartlab" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded-lg font-semibold text-base w-full text-center"
            >
              Join the Deal Hunting Elite
            </a>
          </div>
        </Card>

        {/* Right sales copy */}
        <div className="lg:flex flex-col justify-center space-y-8 bg-muted/30 p-8 rounded-lg">
          <h3 className="text-3xl font-bold">🚀 Why Members Love Us</h3>
          <ul className="space-y-6">
            <li className="flex items-start gap-3">
              <span className="text-primary text-xl mt-1">✓</span>
              <span className="text-lg">Members save an average of $350+ monthly on everyday purchases</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary text-xl mt-1">✓</span>
              <span className="text-lg">Join 5,000+ savvy shoppers finding incredible deals daily</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary text-xl mt-1">✓</span>
              <span className="text-lg">Expert support and community tips available 24/7</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
