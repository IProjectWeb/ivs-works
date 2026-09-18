import React from 'react';
import logoImg from '../assets/images/ivs_works_logo_transparent.png';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'hero';
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({
  size = 'md',
  className = ''
}) => {
  const sizeMap = {
    sm: 'h-10 max-w-[140px]',
    md: 'h-12 sm:h-14 max-w-[200px]',
    lg: 'h-16 max-w-[240px]',
    hero: 'h-20 sm:h-24 max-w-[300px]'
  };

  return (
    <div className={`flex items-center ${className}`}>
      <img
        src={logoImg}
        alt="IVS WORKS Logo"
        referrerPolicy="no-referrer"
        className={`${sizeMap[size]} w-auto object-contain`}
      />
    </div>
  );
};
