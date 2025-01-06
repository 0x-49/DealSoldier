import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "What makes Deal Soldier different?",
    answer: "We don't just notify you about deals—we empower you to hunt smarter, save bigger, and shop confidently. Our exclusive tools and real-time alerts help you find hidden clearance deals that others miss, often saving 50-90% off retail prices."
  },
  {
    question: "How much can I expect to save?",
    answer: "The average member saves $350+ monthly, but many save much more. Some even turn their savings into a side hustle! With our tools and guidance, finding items at 70-90% off retail becomes a regular occurrence."
  },
  {
    question: "Can I use Deal Soldier if I'm new to deal hunting?",
    answer: "Absolutely! With our step-by-step video tutorials, tools, and community support, you'll be a pro in no time. We guide you through everything from basic price scanning to advanced deal-finding strategies."
  },
  {
    question: "What stores does Deal Soldier work with?",
    answer: "While we specialize in Walmart hidden clearance deals, our tools and techniques work at many major retailers including Target, Costco, Home Depot, and more. Our members regularly find incredible deals across multiple stores."
  },
  {
    question: "How do the deal alerts work?",
    answer: "Our system continuously scans thousands of items across multiple stores. When we detect a significant price drop or hidden clearance deal, you'll receive instant notifications. You can customize alerts based on your preferences and location."
  },
  {
    question: "Is there a guarantee?",
    answer: "Yes! We offer a 100% satisfaction guarantee. If you're not completely satisfied with Deal Soldier during your 7-day trial, simply cancel and you won't be charged. No questions asked."
  },
  {
    question: "What tools are included with membership?",
    answer: "Members get access to our complete deal-hunting toolkit worth over $200, including: price scanning tools, inventory checkers, deal alerts, hidden clearance finders, and our exclusive database of proven deal-finding strategies."
  },
  {
    question: "How does the community support work?",
    answer: "Our active community of 5,000+ deal hunters shares tips, celebrates wins, and helps each other daily. Plus, we offer weekly live Q&A sessions with pro deal hunters and 24/7 support in our private Discord server."
  },
  {
    question: "Can I really find items for pennies on the dollar?",
    answer: "Yes! While not every deal will be pennies on the dollar, our members regularly find items for 90%+ off retail. From $25 laptops to 3-cent clearance deals, these opportunities exist if you know where and how to look."
  },
  {
    question: "How much time do I need to spend deal hunting?",
    answer: "That's entirely up to you! Our tools do the heavy lifting, so you can spend as little as 15 minutes a day and still find great deals. Some members make it a full-time hobby, while others just check alerts for specific items they want."
  }
];

export const FAQ = () => {
  return (
    <section className="py-16 px-4 md:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">❓ Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="bg-muted/30 rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold py-4">{faq.question}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-4">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
