import React from 'react';
import { GameServiceType } from '@/types/GameServicesType';
import ServicesCard from './ServicesCard';
import NotfoundData from './NotfoundData';

const ServicesGroup = ({
  groupTitle,
  services,
}: {
  groupTitle: string;
  services: GameServiceType[];
}) => {
  return (
    <div className="w-full exs:w-[320px] xxs:w-[415px] sm:w-[620px] lg:w-[825px] 3xl:w-[1040px] 5xl:w-[1870px] mx-auto">
      <h2 className="text-2xl font-bold text-[#cf5f00] font-BreeSerif mb-3">
        {groupTitle}
      </h2>
      <div className="flex gap-2 xxs:gap-4 flex-wrap justify-center exs:justify-start items-center">
        {services?.length === 0 ? (
          <NotfoundData />
        ) : (
          services?.map((service, index) => (
            <ServicesCard
              key={index}
              name={service.name}
              imageUrl={service.imageUrl}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default ServicesGroup;
