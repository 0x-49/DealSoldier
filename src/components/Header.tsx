import React from 'react';
import Logo from './Logo';
import { Button } from './ui/button';
import { ThemeToggle } from './theme-toggle';

const Header = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex flex-col items-center py-4 px-4 sm:px-6 lg:px-8">
        <div className="flex w-full justify-between items-center">
          <div className="cursor-pointer" onClick={scrollToTop}>
            <Logo />
          </div>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Button variant="default" size="lg" onClick={() => window.open('https://whop.com/deal-soldier/?a=digitalartlab', '_blank')}>
              Join DealSoldier
            </Button>
          </div>
        </div>
        
        <div className="mt-4 text-center">
          <h1 className="text-3xl font-bold tracking-tight">
            Welcome to <span className="text-primary">DealSoldier</span>
          </h1>
          <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">
            Join the elite community of deal hunters and save hundreds on retail purchases. 
            Get access to exclusive tools, real-time alerts, and expert strategies.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;