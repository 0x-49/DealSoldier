import React from 'react';
import Image from 'next/image';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center gap-3">
      <Image
        src="/images/DealSoldierLogo.jpg"
        alt="DealSoldier Logo"
        width={40}
        height={40}
        className="rounded-md"
      />
      <span className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
        DealSoldier
      </span>
    </div>
  );
};

export default Logo;
