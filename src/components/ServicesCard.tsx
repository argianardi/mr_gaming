import { truncateText } from '@/utils/truncateText';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ServicesCard = ({
  name,
  imageUrl,
}: {
  name: string;
  imageUrl: string;
}) => {
  return (
    <Link
      href={`/services/${name}`}
      className="card card-compact  bg-[#2f4158] w-48 exs:w-[150px] xxs:w-48 h-52 shadow-xl cursor-pointer hover:bg-[#cf5f00] transition-all duration-300"
    >
      <figure>
        <Image
          src={imageUrl}
          alt={name}
          width={192}
          height={192}
          className="rounded-2xl object-cover h-40 w-48"
        />
      </figure>
      <h2 className="font-BreeSerif text-white text-center font-extralight text-lg mt-2 ">
        {truncateText(name, 14)}
      </h2>
    </Link>
  );
};

export default ServicesCard;
