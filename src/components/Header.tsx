import { useRouter } from 'next/router';
import Logo from './Logo';
import { Button } from './ui/button';

const Header = () => {
  const router = useRouter();

  return (
    <div className="w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex flex-col items-center py-4 px-4 sm:px-6 lg:px-8">
        <div className="flex w-full justify-between items-center">
          <div className="cursor-pointer" onClick={() => router.push("/")}>
            <Logo />
          </div>
          <Button variant="default" size="lg" onClick={() => window.open('https://whop.com/dealsoldier/', '_blank')}>
            Join DealSoldier
          </Button>
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