import Image from 'next/image';
import React from 'react';

const Footer = () => {
  return (
    <div className='pt-16 pb-16 bg-[#0f0715]'>
        <div>
            <Image
            src="/images/logo.png"
            alt='logo'
            width={180}
            height={180}
            className='mx-auto'
            />
        </div>
        <div className="flex items-center flex-wrap justify-center space-x-10 text-white font-bold">
            <div>Home.</div>
            <div>Services.</div>
            <div>Project.</div>
            <div>Reviews.</div>
            <div>Contact.</div>
        </div>
        <p className='text-white text-opacity-60 mt-6 text-center'>@ 2025 All Rights Reserved by Muhammad Waleed</p>
        </div>
  );
}

export default Footer;