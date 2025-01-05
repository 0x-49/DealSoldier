import React from "react";
import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { StarIcon, CheckIcon, InstagramIcon, FacebookIcon, YoutubeIcon, AlertCircle, Clock, Users, Search } from "lucide-react";
import { VideoCarousel } from "@/components/VideoCarousel";
import { ThemeToggle } from "@/components/theme-toggle";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Home() {
  const features = [
    { 
      title: "Real-Time Alerts",
      description: "Get notified instantly when new deals are found at Walmart, Target, and other major retailers.",
      icon: AlertCircle
    },
    { 
      title: "Community Support",
      description: "Join a network of 5,000+ deal hunters ready to help.",
      icon: Users
    },
    { 
      title: "Local Inventory Search",
      description: "Search by zip code to find local store inventory and hidden discounts.",
      icon: Search
    },
    { 
      title: "24/7 Updates",
      description: "Never miss a deal with our round-the-clock updates and alerts.",
      icon: Clock
    },
  ];

  const targetAudience = [
    { 
      title: "Bargain Hunters", 
      description: "Looking for massive discounts on everyday essentials? Start here and save hundreds monthly!" 
    },
    { 
      title: "Resellers", 
      description: "Find hidden clearance items perfect for flipping on eBay or Amazon. Turn deals into profit!" 
    },
    { 
      title: "Gift Givers", 
      description: "Discover amazing finds to stockpile for birthdays and holidays. Save big on presents!" 
    },
    { 
      title: "Freebie Lovers", 
      description: "Unlock exclusive freebies and discount coupons. Why pay when it could be free?" 
    },
    { 
      title: "Deal Enthusiasts", 
      description: "Join a community that curates the best deals from hundreds of sources." 
    },
  ];

  const reviews = [
    { 
      name: "Generational Wealth", 
      date: "Jan 2, 25", 
      content: "Deal Soldier saved me $3,500 on ribeye and tenderloin! This app pays for itself." 
    },
    { 
      name: "Veronica Bastardo", 
      date: "Jan 2, 25", 
      content: "I've stocked my house with essentials for half the price. This mama is happy!" 
    },
    { 
      name: "Kari Gavagan", 
      date: "Jan 1, 25", 
      content: "Perfect for resellers—so many profitable finds!" 
    },
  ];

  const faqs = [
    {
      question: "What makes Deal Soldier different?",
      answer: "Deal Soldier combines real-time alerts, local inventory search, and a supportive community of 5,000+ deal hunters. We specialize in finding hidden clearance deals that others miss."
    },
    {
      question: "How easy is it to cancel?",
      answer: "Very easy! You can cancel anytime with just one click from your account settings. No questions asked, no hidden fees."
    },
    {
      question: "Can I use Deal Soldier if I'm new to deal hunting?",
      answer: "Absolutely! Our community welcomes beginners and our expert staff will guide you through every step. We provide tutorials, tips, and support to help you start saving immediately."
    },
    {
      question: "How much can I expect to save?",
      answer: "Members save $350+ on average monthly, with some saving thousands! The exact amount varies based on your shopping habits and the deals you choose to pursue."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Join Deal Soldier – Find Hidden Clearance & Deals That Pay for Themselves!</title>
        <meta name="description" content="Uncover the best deals on electronics, clothing, and more. Save hundreds or even thousands monthly with Deal Soldier's exclusive clearance alerts!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        {/* Theme Toggle */}
        <div className="fixed top-4 right-4 z-50">
          <ThemeToggle />
        </div>

        {/* Hero Section */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 space-y-12">
          <div className="text-center">
            <div className="inline-block">
              <h1 className="text-4xl sm:text-6xl font-bold tracking-tight">
                <span className="text-foreground dark:text-foreground">🚀</span>
                <span className="bg-gradient-to-r from-primary via-primary to-primary/80 dark:from-primary dark:via-primary/90 dark:to-primary/70 bg-clip-text text-transparent drop-shadow-sm">
                  Transform Your Shopping Game!
                </span>
                <span className="text-foreground dark:text-foreground">💰</span>
              </h1>
            </div>
            <p className="mt-6 text-xl leading-8 text-foreground dark:text-foreground/95">
              Say goodbye to overpaying and hello to <span className="font-bold text-primary dark:text-primary/95">insider savings secrets!</span> Unlock access to clearance treasures, real-time deal alerts, and exclusive tools.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <a
                href="https://whop.com/deal-soldier/?a=digitalartlab"
                className="rounded-md bg-primary px-6 py-3 font-semibold text-primary-foreground dark:text-primary-foreground/95 shadow-lg hover:bg-primary/90 transition-all"
              >
                Start Your 7-Day Free Trial 🎯
              </a>
            </div>
            
            {/* Trust Indicators */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="p-4 rounded-lg bg-card hover:bg-accent transition-all border border-border/50">
                <h3 className="text-2xl font-bold text-primary">✨ $350+</h3>
                <p className="text-card-foreground/90">Average Monthly Savings</p>
              </div>
              <div className="p-4 rounded-lg bg-card hover:bg-accent transition-all border border-border/50">
                <h3 className="text-2xl font-bold text-primary">🌟 5,000+</h3>
                <p className="text-card-foreground/90">Active Members</p>
              </div>
              <div className="p-4 rounded-lg bg-card hover:bg-accent transition-all border border-border/50">
                <h3 className="text-2xl font-bold text-primary">💯 100%</h3>
                <p className="text-card-foreground/90">Satisfaction Guarantee</p>
              </div>
            </div>
          </div>

          {/* Video Section */}
          <div className="w-full py-12">
            <h2 className="text-3xl font-bold text-center mb-8 text-foreground">
              🎥 See Real Deals in Action
            </h2>
            <VideoCarousel />
          </div>

          {/* Why Join Section */}
          <section className="py-16 bg-card/50 rounded-xl border border-border/50">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
                💎 Why Join Deal Soldier? 
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="p-6 rounded-xl bg-background/50 shadow-lg hover:shadow-xl transition-all border border-border/50">
                  <div className="text-4xl mb-4">🔔</div>
                  <h3 className="text-xl font-bold mb-2 text-foreground">Real-Time Alerts</h3>
                  <p className="text-muted-foreground">Never miss a markdown again with instant notifications for Walmart, Target, Costco, and more!</p>
                </div>
                <div className="p-6 rounded-xl bg-background/50 shadow-lg hover:shadow-xl transition-all border border-border/50">
                  <div className="text-4xl mb-4">🗺️</div>
                  <h3 className="text-xl font-bold mb-2 text-foreground">Local Inventory Search</h3>
                  <p className="text-muted-foreground">Find hidden discounts in your neighborhood with our zip code search tool</p>
                </div>
                <div className="p-6 rounded-xl bg-background/50 shadow-lg hover:shadow-xl transition-all border border-border/50">
                  <div className="text-4xl mb-4">👥</div>
                  <h3 className="text-xl font-bold mb-2 text-foreground">Community Support</h3>
                  <p className="text-muted-foreground">Join 5,000+ deal enthusiasts sharing tips and celebrating wins together</p>
                </div>
              </div>
              <div className="text-center mt-12">
                <a
                  href="https://whop.com/deal-soldier/?a=digitalartlab"
                  className="inline-block rounded-md bg-primary px-8 py-4 font-semibold text-primary-foreground shadow-lg hover:bg-primary/90 transition-all"
                >
                  Join the Deal-Hunting Pros Today! 🎯
                </a>
              </div>
            </div>
          </section>

          {/* Success Stories */}
          <section className="py-16">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
                🌟 Success Stories from Happy Members
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="p-6 rounded-xl bg-card/50 hover:bg-accent transition-all border border-border/50">
                  <div className="flex items-center mb-4">
                    <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
                  </div>
                  <p className="italic mb-4 text-card-foreground">"Deal Soldier saved me $3,500 on ribeye and tenderloin! This app pays for itself."</p>
                  <p className="font-bold text-primary">- Generational Wealth</p>
                  <p className="text-sm text-muted-foreground">Jan 2, 2025</p>
                </div>
                <div className="p-6 rounded-xl bg-card/50 hover:bg-accent transition-all border border-border/50">
                  <div className="flex items-center mb-4">
                    <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
                  </div>
                  <p className="italic mb-4 text-card-foreground">"I've stocked my house with essentials for half the price. This mama is happy!"</p>
                  <p className="font-bold text-primary">- Veronica Bastardo</p>
                  <p className="text-sm text-muted-foreground">Jan 2, 2025</p>
                </div>
                <div className="p-6 rounded-xl bg-card/50 hover:bg-accent transition-all border border-border/50">
                  <div className="flex items-center mb-4">
                    <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
                  </div>
                  <p className="italic mb-4 text-card-foreground">"Perfect for resellers—so many profitable finds!"</p>
                  <p className="font-bold text-primary">- Kari Gavagan</p>
                  <p className="text-sm text-muted-foreground">Jan 2, 2025</p>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-16">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
                ❓ Frequently Asked Questions
              </h2>
              <div className="max-w-3xl mx-auto space-y-6">
                <div className="p-6 rounded-xl bg-card/50 hover:bg-accent transition-all border border-border/50">
                  <h3 className="font-bold mb-2 text-foreground">What makes Deal Soldier different?</h3>
                  <p className="text-muted-foreground">We don't just notify you about deals—we empower you to hunt smarter, save bigger, and shop confidently.</p>
                </div>
                <div className="p-6 rounded-xl bg-card/50 hover:bg-accent transition-all border border-border/50">
                  <h3 className="font-bold mb-2 text-foreground">How much can I expect to save?</h3>
                  <p className="text-muted-foreground">The average member saves $350+ monthly, but many save much more. Some even turn their savings into a side hustle!</p>
                </div>
                <div className="p-6 rounded-xl bg-card/50 hover:bg-accent transition-all border border-border/50">
                  <h3 className="font-bold mb-2 text-foreground">Can I use Deal Soldier if I'm new to deal hunting?</h3>
                  <p className="text-muted-foreground">Absolutely! With our tips, tools, and community support, you'll be a pro in no time.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Final CTA */}
          <section className="bg-primary rounded-xl py-16">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl font-bold mb-6 text-primary-foreground">
                💥 Ready to Start Saving? Join Deal Soldier Today! 💥
              </h2>
              <p className="mb-8 text-xl text-primary-foreground/90">
                Start saving smarter. Shop better. Live richer.
              </p>
              <a
                href="https://whop.com/deal-soldier/?a=digitalartlab"
                className="inline-block rounded-md bg-background text-primary px-8 py-4 font-semibold shadow-lg hover:bg-accent transition-all"
              >
                Start Your 7-Day Free Trial Now! 🎯
              </a>
              <p className="mt-4 text-sm text-primary-foreground/80">
                No commitment required - cancel anytime
              </p>
            </div>
          </section>

          {/* Floating CTA for Mobile */}
          <div className="fixed bottom-4 right-4 z-50 md:hidden">
            <a
              href="https://whop.com/deal-soldier/?a=digitalartlab"
              className="inline-block rounded-md bg-primary px-6 py-3 font-semibold text-primary-foreground shadow-lg hover:bg-primary/90 transition-all"
            >
              Join Now 🎯
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-border mt-16 bg-card">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Quick Links */}
              <div>
                <h3 className="text-lg font-semibold mb-4 text-foreground">Quick Links</h3>
                <ul className="space-y-3">
                  <li>
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                      How It Works
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                      Success Stories
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                      FAQs
                    </a>
                  </li>
                </ul>
              </div>

              {/* Community */}
              <div>
                <h3 className="text-lg font-semibold mb-4 text-foreground">Community</h3>
                <ul className="space-y-3">
                  <li>
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                      Discord Server
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                      Deal Alerts
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                      Member Benefits
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                      Testimonials
                    </a>
                  </li>
                </ul>
              </div>

              {/* Support */}
              <div>
                <h3 className="text-lg font-semibold mb-4 text-foreground">Support</h3>
                <ul className="space-y-3">
                  <li>
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                      Contact Us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                      Help Center
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                      Terms of Service
                    </a>
                  </li>
                </ul>
              </div>

              {/* Connect */}
              <div>
                <h3 className="text-lg font-semibold mb-4 text-foreground">Connect With Us</h3>
                <div className="flex space-x-4 mb-4">
                  <a href="https://www.instagram.com/superunsexy" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                    <InstagramIcon className="h-6 w-6" />
                  </a>
                  <a href="https://www.youtube.com/@SuperUnsexy" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                    <YoutubeIcon className="h-6 w-6" />
                  </a>
                  <a href="https://facebook.com/superunsexy" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                    <FacebookIcon className="h-6 w-6" />
                  </a>
                </div>
                <a
                  href="https://whop.com/deal-soldier/?a=digitalartlab"
                  className="inline-block rounded-md bg-primary/90 px-6 py-3 font-semibold text-white shadow-lg hover:bg-primary transition-all w-full text-center"
                >
                  Join Now 🎯
                </a>
              </div>
            </div>

            {/* Bottom Section */}
            <div className="mt-12 pt-8 border-t border-border">
              <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                <p className="text-sm text-muted-foreground">
                  2025 Deal Soldier. All rights reserved.
                </p>
                <p className="text-sm text-muted-foreground">
                  <span className="font-medium">Affiliate Disclosure:</span> Some links may earn us a commission.
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}