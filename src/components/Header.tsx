'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { RiAccountPinCircleFill } from 'react-icons/ri';
import { TiHomeOutline } from 'react-icons/ti';
import { LuGift } from 'react-icons/lu';
import { FaHandshake } from 'react-icons/fa6';
import { usePathname } from 'next/navigation';
import SearchInput from './SearchInput';
import { GameServiceType } from '@/types/GameServicesType';
import SearchResultsModal from './SearchResultModal';
import { mobileGameServices, pcGameServices } from '@/data/gamesServices';

const Header = () => {
  const [bgNav, setBgNav] = useState(' ');
  const pathname = usePathname();
  const [gameServices, setGamesServices] = useState<GameServiceType[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [showModal, setShowModal] = useState<boolean>(false);

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

  // Handle Background
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

  // Handle Search
  const handleSearchFilter = (value: string) => {
    setSearchQuery(value);
    if (value) {
      const filteredGames = [...mobileGameServices, ...pcGameServices].filter(
        (game) => game.name.toLowerCase().includes(value.toLowerCase())
      );
      setGamesServices(filteredGames);
      setShowModal(true);
    } else {
      setShowModal(false);
    }
  };

  return (
    <header className={`bg-base-100 sticky z-[9999] top-0 ${bgNav}`}>
      <div className="px-4 justify-center lg:justify-between navbar sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-24  3xl:px-0 3xl:mx-auto w-full 3xl:w-[1200px] 5xl:w-[1900px]">
        <div className="space-x-0 lg:space-x-5 xl:space-x-4 2xl:space-x-8 flex-grow">
          <Link
            href={'/'}
            className="text-3xl font-Knewave font-bold text-[#cf5f00] italic flex-none mx-auto lg:mx-0"
          >
            MR GAMING
          </Link>
          <div className="hidden lg:flex gap-4 flex-none">
            {navigations.map((nav, index) => (
              <Link
                key={index}
                href={nav.link}
                className="flex items-center gap-1 group flex-none"
              >
                <nav.icon
                  className={`text-3xl transition-all duration-300 group-hover:text-[#1a1f39] hidden xl:block ${
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

        <div className="w-[400px] xl:w-[580px] 2xl:w-[600px] justify-end hidden lg:flex space-x-6">
          <div className="relative w-[400px] xl:w-[580px] hidden lg:flex">
            <SearchInput handleSearchFilter={handleSearchFilter} />
            {showModal && <SearchResultsModal results={gameServices} />}
          </div>
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
