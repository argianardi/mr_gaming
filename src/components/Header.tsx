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

const Header = () => {
  const mobileGameServices = [
    {
      name: 'Top Up Mobile Legends',
      imageUrl:
        'https://res.cloudinary.com/dtzvdufwr/image/upload/v1723770182/by38b2ttynvaaqozyi34.jpg',
    },
    {
      name: 'Top Up Free Fire',
      imageUrl:
        'https://res.cloudinary.com/dtzvdufwr/image/upload/v1723770182/rxi10ha8xojwypk9y9kn.jpg',
    },
    {
      name: 'Top Up PUBG Mobile',
      imageUrl:
        'https://res.cloudinary.com/dtzvdufwr/image/upload/v1723770182/psn9nw59pjflp8lgdxml.jpg',
    },
    {
      name: 'Top Up Call of Duty Mobile',
      imageUrl:
        'https://res.cloudinary.com/dtzvdufwr/image/upload/v1723770181/l8auzxcmho0estnhrsf5.jpg',
    },
    {
      name: 'Top Up Genshin Impact',
      imageUrl:
        'https://res.cloudinary.com/dtzvdufwr/image/upload/v1723770180/j8xyacqqbzgsj1hrj2ra.jpg',
    },
    {
      name: 'Top Up Arena of Valor',
      imageUrl:
        'https://res.cloudinary.com/dtzvdufwr/image/upload/v1723770182/by38b2ttynvaaqozyi34.jpg',
    },
    {
      name: 'Top Up Clash of Clans',
      imageUrl:
        'https://res.cloudinary.com/dtzvdufwr/image/upload/v1723770182/rxi10ha8xojwypk9y9kn.jpg',
    },
    {
      name: 'Top Up Fortnite',
      imageUrl:
        'https://res.cloudinary.com/dtzvdufwr/image/upload/v1723770181/l8auzxcmho0estnhrsf5.jpg',
    },
    {
      name: 'Top Up Roblox',
      imageUrl:
        'https://res.cloudinary.com/dtzvdufwr/image/upload/v1723770182/by38b2ttynvaaqozyi34.jpg',
    },
    {
      name: 'Top Up Brawl Stars',
      imageUrl:
        'https://res.cloudinary.com/dtzvdufwr/image/upload/v1723770180/j8xyacqqbzgsj1hrj2ra.jpg',
    },
  ];

  const pcGameServices = [
    {
      name: 'Voucher Steam',
      imageUrl:
        'https://res.cloudinary.com/dtzvdufwr/image/upload/v1723770182/rthceeqwnysbwo2uyj0f.jpg',
    },
    {
      name: 'Voucher PlayStation Network',
      imageUrl:
        'https://res.cloudinary.com/dtzvdufwr/image/upload/v1723770182/psn9nw59pjflp8lgdxml.jpg',
    },
    {
      name: 'Voucher Xbox Live',
      imageUrl:
        'https://res.cloudinary.com/dtzvdufwr/image/upload/v1723770180/j8xyacqqbzgsj1hrj2ra.jpg',
    },
    {
      name: 'Voucher Garena',
      imageUrl:
        'https://res.cloudinary.com/dtzvdufwr/image/upload/v1723770182/by38b2ttynvaaqozyi34.jpg',
    },
    {
      name: 'Voucher Nintendo eShop',
      imageUrl:
        'https://res.cloudinary.com/dtzvdufwr/image/upload/v1723770182/psn9nw59pjflp8lgdxml.jpg',
    },
    {
      name: 'Voucher Google Play',
      imageUrl:
        'https://res.cloudinary.com/dtzvdufwr/image/upload/v1723770182/rthceeqwnysbwo2uyj0f.jpg',
    },
    {
      name: 'Voucher iTunes',
      imageUrl:
        'https://res.cloudinary.com/dtzvdufwr/image/upload/v1723770182/rxi10ha8xojwypk9y9kn.jpg',
    },
    {
      name: 'Top Up Apex Legends Mobile',
      imageUrl:
        'https://res.cloudinary.com/dtzvdufwr/image/upload/v1723770182/psn9nw59pjflp8lgdxml.jpg',
    },
    {
      name: 'Top Up Ragnarok M',
      imageUrl:
        'https://res.cloudinary.com/dtzvdufwr/image/upload/v1723770181/l8auzxcmho0estnhrsf5.jpg',
    },
    {
      name: 'Voucher Google Play',
      imageUrl:
        'https://res.cloudinary.com/dtzvdufwr/image/upload/v1723770182/rthceeqwnysbwo2uyj0f.jpg',
    },
  ];

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
