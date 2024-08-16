'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { RiAccountPinCircleFill } from 'react-icons/ri';
import { IoIosSearch } from 'react-icons/io';
import { TiHomeOutline } from 'react-icons/ti';
import { LuGift } from 'react-icons/lu';
import { FaHandshake } from 'react-icons/fa6';
import { usePathname } from 'next/navigation';

const Header = () => {
  const [bgNav, setBgNav] = useState(' ');
  const pathname = usePathname();

  const navigations = [
    {
      name: 'Home',
      icon: TiHomeOutline,
      link: '/',
    },
    {
      name: 'Poin Rewards',
      icon: LuGift,
      link: '/rewards',
    },
    {
      name: 'Afiliasi',
      icon: FaHandshake,
      link: '/affiliate',
    },
  ];

  const changeBackground = () => {
    if (window.scrollY == 0) {
      setBgNav(' ');
    } else {
      setBgNav('bg-base-300 bg-opacity-70 bgNav');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeBackground);

    return () => {
      window.removeEventListener('scroll', changeBackground);
    };
  }, []);

  return (
    <header className={`bg-base-100 sticky z-[9999] top-0 ${bgNav}`}>
      <div className="px-4 justify-center lg:justify-between navbar sm:px-6 md:px-8 lg:px-10 xl:px-12">
        <div className="space-x-8">
          <Link
            href={'/'}
            className="btn btn-ghost text-3xl font-Knewave font-bold text-[#cf5f00] italic"
          >
            MR GAMING
          </Link>
          <div className="hidden lg:flex gap-4">
            {navigations.map((nav, index) => (
              <Link
                key={index}
                href={nav.link}
                className="flex items-center gap-1 group"
              >
                <nav.icon
                  className={`text-3xl transition-all duration-300 group-hover:text-[#1a1f39] ${
                    pathname === nav.link ? 'text-[#1a1f39] ' : 'text-[#2f4158]'
                  }`}
                />
                <span
                  className={`font-Roboto text-lg transition-all duration-300 group-hover:text-[#1a1f39] group-hover:font-bold ${
                    pathname === nav.link
                      ? 'text-[#1a1f39] font-bold'
                      : 'text-[#2f4158]'
                  }`}
                >
                  {nav.name}
                </span>
              </Link>
            ))}
          </div>
        </div>

        <div className="justify-end hidden lg:block max-w-56 space-x-1">
          <Link href={'/cari-game'} className="btn btn-ghost btn-circle">
            <IoIosSearch className="text-2xl" />
          </Link>
          <Link href={'/login'} className="btn btn-neutral bg-[#2f4158]">
            <RiAccountPinCircleFill className="text-white text-2xl" />
            <span className="text-white">Masuk</span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
