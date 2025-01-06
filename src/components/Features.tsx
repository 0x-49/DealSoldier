import React from 'react';
import { Card } from '@/components/ui/card';

const features = [
  {
    icon: "🔔",
    title: "Real-Time Alerts",
    description: "Never miss a markdown again with instant notifications for Walmart, Target, Costco, and more!"
  },
  {
    icon: "🗺️",
    title: "Local Inventory Search",
    description: "Find hidden discounts in your neighborhood with our zip code search tool"
  },
  {
    icon: "👥",
    title: "Community Support",
    description: "Join 5,000+ deal enthusiasts sharing tips and celebrating wins together"
  }
];

const benefits = [
  "Exclusive access to deal-finding tools worth over $200",
  "Real-time alerts for hidden clearance deals",
  "Step-by-step video tutorials on deal hunting",
  "Private community of expert deal finders",
  "Weekly live Q&A sessions with pro deal hunters"
];

const stats = [
  {
    value: "$350+",
    label: "Average Monthly Savings",
    icon: "✨"
  },
  {
    value: "5,000+",
    label: "Active Members",
    icon: "🌟"
  },
  {
    value: "100%",
    label: "Satisfaction Guarantee",
    icon: "💯"
  }
];

export const Features = () => {
  return (
    <>
      <section className="py-16 px-4 md:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {stats.map((stat, index) => (
              <Card key={index} className="p-6 text-center">
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-3xl font-bold mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 md:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">💎 Why Join Deal Soldier?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <Card key={index} className="p-6">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>

          <div className="bg-muted/30 rounded-lg p-8">
            <h3 className="text-2xl font-semibold mb-6">✓ Member Benefits</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-primary">✓</span>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};
