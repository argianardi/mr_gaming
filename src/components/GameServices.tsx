'use client';

import React, { useState } from 'react';
import SearchInput from './SearchInput';
import ServicesGroup from './ServicesGroup';
import { GameServiceType } from '@/types/GameServicesType';

const GameServices = () => {
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
  const [mobileGames, setMobileGames] =
    useState<GameServiceType[]>(mobileGameServices);
  const [pcGames, setPcGames] = useState<GameServiceType[]>(pcGameServices);

  // Handle search filter
  const handleSearchFilter = (value: string) => {
    const filteredMobileGames = mobileGameServices.filter((game) =>
      game.name.toLowerCase().includes(value.toLowerCase())
    );
    setMobileGames(filteredMobileGames);

    const filteredPcGames = pcGameServices.filter((game) =>
      game.name.toLowerCase().includes(value.toLowerCase())
    );
    setPcGames(filteredPcGames);
  };

  return (
    <div className="space-y-6">
      <SearchInput
        customClass="mt-3 xxs:-mt-6 sx:mt-3 sm:-mt-1 md:mt-5 w-full exs:w-[320px] xxs:w-[415px] sm:w-[620px] lg:w-[825px] 3xl:w-[1040px] 5xl:w-[1870px] mx-auto"
        handleSearchFilter={handleSearchFilter}
        isShowSortKey={false}
      />
      <ServicesGroup groupTitle="Mobile Games" services={mobileGames} />
      <ServicesGroup groupTitle="PC Games" services={pcGames} />
    </div>
  );
};

export default GameServices;
