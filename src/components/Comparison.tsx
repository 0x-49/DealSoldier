import React from 'react';
import { Card } from '@/components/ui/card';

const withoutFeatures = [
  "Hours of manual scanning required",
  "Miss out on 90% of hidden deals",
  "No access to deal-finding tools",
  "Limited knowledge of store patterns",
  "No community support or guidance",
  "Wasted time on expired deals"
];

const withFeatures = [
  "Automated tools do the work for you",
  "Instant notifications for best deals",
  "Professional deal-hunting toolkit",
  "Expert insights and strategies",
  "Active community support 24/7",
  "Real-time deal verification"
];

const didYouKnow = [
  "Members save an average of $450/month on retail purchases",
  "Our tools scan over 5000+ items daily for hidden deals",
  "90% of clearance items never show up in store ads",
  "Members get first access to 3¢ deals within minutes",
  "Our community has saved over $2M collectively"
];

export const Comparison = () => {
  return (
    <section className="py-16 px-4 md:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">See The Difference</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <Card className="p-6 bg-muted/30">
            <h3 className="text-xl font-semibold mb-6">Without Deal Soldier</h3>
            <ul className="space-y-4">
              {withoutFeatures.map((feature, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-destructive">✕</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </Card>

          <Card className="p-6 bg-primary/5">
            <h3 className="text-xl font-semibold mb-6">With Deal Soldier</h3>
            <ul className="space-y-4">
              {withFeatures.map((feature, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-primary">✓</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>

        <Card className="p-8 bg-muted/30">
          <h3 className="text-2xl font-bold text-center mb-8">Did You Know?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {didYouKnow.map((fact, index) => (
              <div key={index} className="flex items-start gap-2">
                <span className="text-primary text-xl">💡</span>
                <span>{fact}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
};
