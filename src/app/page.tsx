import React from 'react';
import { VideoCarousel } from '@/components/VideoCarousel';
import { Features } from '@/components/Features';
import { Comparison } from '@/components/Comparison';
import { Testimonials } from '@/components/Testimonials';
import { FAQ } from '@/components/FAQ';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="py-16 px-4 md:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          🚀Transform Your Shopping Game!💰
        </h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
          Say goodbye to overpaying and hello to insider savings secrets! Unlock access to clearance treasures, real-time deal alerts, and exclusive tools.
        </p>
        <Button 
          size="lg" 
          className="text-lg px-8 py-6"
          onClick={() => window.open('https://whop.com/dealsoldier/', '_blank')}
        >
          Start Your 7-Day Free Trial 🎯
        </Button>
      </section>

      {/* Features Section with Stats */}
      <Features />

      {/* Video Section */}
      <VideoCarousel />

      {/* Comparison Section */}
      <Comparison />

      {/* Testimonials */}
      <Testimonials />

      {/* FAQ Section */}
      <FAQ />

      {/* CTA Section */}
      <section className="py-16 px-4 md:px-6 lg:px-8 text-center bg-primary/5">
        <h2 className="text-3xl font-bold mb-6">💥 Ready to Start Saving? Join Deal Soldier Today! 💥</h2>
        <p className="text-xl mb-8">Start saving smarter. Shop better. Live richer.</p>
        <Button 
          size="lg" 
          className="text-lg px-8 py-6"
          onClick={() => window.open('https://whop.com/dealsoldier/', '_blank')}
        >
          Start Your 7-Day Free Trial Now! 🎯
        </Button>
        <p className="text-sm text-muted-foreground mt-4">No commitment required - cancel anytime</p>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 md:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>About Us</li>
                <li>How It Works</li>
                <li>Success Stories</li>
                <li>FAQs</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Community</h3>
              <ul className="space-y-2">
                <li>Discord Server</li>
                <li>Deal Alerts</li>
                <li>Member Benefits</li>
                <li>Testimonials</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2">
                <li>Contact Us</li>
                <li>Help Center</li>
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Connect With Us</h3>
              <Button 
                className="w-full"
                onClick={() => window.open('https://whop.com/dealsoldier/', '_blank')}
              >
                Join Now 🎯
              </Button>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
            <p>2025 Deal Soldier. All rights reserved.</p>
            <p className="mt-2">Affiliate Disclosure: Some links may earn us a commission.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
