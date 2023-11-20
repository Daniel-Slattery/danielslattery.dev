import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Logo = () => {
  return (
    <div className="flex items-center h-8 px-2 transition duration-200 ease-in-out hover:rotate-20">
      <Link href="/">
        <Image
          src="/images/android-chrome-192x192.png"
          width={30}
          height={30}
          alt="logo"
          className="mr-2 cursor-pointer"
        />
      </Link>
    </div>
  );
};

export default Logo;
