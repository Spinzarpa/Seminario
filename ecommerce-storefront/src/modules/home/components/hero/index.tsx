"use client";

import Image from 'next/image';

const Hero = () => {
  return (
    <div className="h-[90vh] w-full relative">
      <Image
        src="/us/hero.png"
        alt="homepage banner"
        fill
        priority={true}
        quality={90}
        style={{ objectFit: 'contain' }}
        className="absolute inset-0"
        draggable="false"
      />
    </div>
  );
};

export default Hero;
