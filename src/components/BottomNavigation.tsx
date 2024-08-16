'use client';

import { RiAccountPinCircleFill } from 'react-icons/ri';
import { IoIosSearch } from 'react-icons/io';
import { TiHomeOutline } from 'react-icons/ti';
import { LuGift } from 'react-icons/lu';
import { FaHandshake } from 'react-icons/fa6';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const BottomNavigation = () => {
  const pathname = usePathname();
  console.log(pathname);

  const navigations = [
    {
      name: 'Home',
      icon: TiHomeOutline,
      link: '/',
    },
    {
      name: 'Cari',
      icon: IoIosSearch,
      link: '/cari-game',
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
    {
      name: 'Masuk',
      icon: RiAccountPinCircleFill,
      link: '/login',
    },
  ];

  return (
    <div className="sticky lg:hidden bottom-0 py-4">
      <div
        className={`btm-nav  rounded-t-3xl xs:rounded-t-[50px] overflow-hidden h-16 sm:h-20 lg:h-24 mt-6 w-full bg-base-100 bg-opacity-70 bgNav`}
      >
        {navigations.map((nav, index) => (
          <Link
            key={index}
            href={nav.link}
            className={`flex flex-col group items-center  font-Roboto text-xl ${
              pathname === nav.link ? 'active bg-opacity-0' : ''
            }`}
          >
            <nav.icon
              className={`text-4xl transition-all duration-300 group-hover:text-[#1a1f39] ${
                pathname === nav.link ? 'text-[#1a1f39] ' : 'text-[#2f4158]'
              }`}
            />
            <span
              className={`hidden sm:block font-Roboto  transition-all duration-300 group-hover:text-[#1a1f39] group-hover:font-bold ${
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
  );
};

export default BottomNavigation;
