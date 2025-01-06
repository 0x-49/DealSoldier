import React from 'react';

const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <img
        src="/images/DealSoldierLogo.jpg"
        alt="DealSoldier Logo"
        className="h-8 w-8 object-contain"
      />
      <span className="font-bold text-xl">DealSoldier</span>
    </div>
  );
};

export default Logo;
