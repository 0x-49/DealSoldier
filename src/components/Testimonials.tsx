import React from 'react';
import { Card } from '@/components/ui/card';

const testimonials = [
  {
    text: "Deal Soldier saved me $3,500 on ribeye and tenderloin! This app pays for itself.",
    author: "Generational Wealth",
    date: "Jan 2, 2025"
  },
  {
    text: "I've stocked my house with essentials for half the price. This mama is happy!",
    author: "Veronica Bastardo",
    date: "Jan 2, 2025"
  },
  {
    text: "Perfect for resellers—so many profitable finds!",
    author: "Kari Gavagan",
    date: "Jan 2, 2025"
  }
];

export const Testimonials = () => {
  return (
    <section className="py-16 px-4 md:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">🌟 Success Stories from Happy Members</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6">
              <div className="flex flex-col h-full">
                <div className="text-yellow-500 mb-4">⭐⭐⭐⭐⭐</div>
                <p className="text-lg mb-4 flex-grow">{testimonial.text}</p>
                <div className="mt-auto">
                  <p className="font-semibold">- {testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.date}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
