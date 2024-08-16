'use client';

import React, { useState } from 'react';
import SearchInput from './SearchInput';
import ServicesGroup from './ServicesGroup';
import { GameServiceType } from '@/types/GameServicesType';
import { mobileGameServices, pcGameServices } from '@/data/gamesServices';

const GameServices = () => {
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
