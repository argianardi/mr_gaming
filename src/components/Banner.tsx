'use client';

import Image from 'next/image';
import React, { useState, useEffect } from 'react';

const imageSliderItems = [
  'https://res.cloudinary.com/dtzvdufwr/image/upload/v1723770182/w4vkvggtoxnjknrqzhhu.jpg',
  'https://res.cloudinary.com/dtzvdufwr/image/upload/v1723770181/aictjs3imqyiabw0nhi4.jpg',
  'https://res.cloudinary.com/dtzvdufwr/image/upload/v1723770180/qzef1h7zkuzotn5yiotz.jpg',
];

const Banner = () => {
  const [currentItem, setCurrentItem] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentItem((prevItem) =>
        prevItem === imageSliderItems.length - 1 ? 0 : prevItem + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Slider Style
  const middlePostion =
    'right-10 exs:right-[30px] xs:right-[35px] xxs:right-[45px] sx:right-[52px] sm:right-[80px] md:right-[77px] lg:right-[98px] xl:right-[175px] 3xl:right-[195px] 5xl:right-[430px] w-[230px] h-[143px] exs:w-[289px] exs:h-[180px] xs:w-[310px] xs:h-[195px] xxs:w-[350px] xxs:h-[220px] sx:h-[270px] sx:w-[430px] sm:h-[280px] sm:w-[450px] md:w-[579px] md:h-[357px] lg:w-[715px] lg:h-[442px] xl:w-[660px] xl:h-[410px] 3xl:w-[805px] 3xl:h-[500px] 5xl:h-[643px] 5xl:w-[1042px] z-50'; // middle
  const rightPosition =
    'right-0 h-[110px] w-[170px] xs:h-[130px] xs:w-[200px] xxs:h-[150px] xxs:w-[250px] sx:h-[200px] sx:w-[320px] sm:h-[220px] sm:w-[360px] md:w-[386px] md:h-[238px] lg:w-[477px] lg:h-[295px] xl:w-[484px] xl:h-[300px] 3xl:w-[597px] 3xl:h-[370px] 5xl:h-[515px] 5xl:w-[834px]';
  const leftPosition =
    'right-[139px] exs:right-[185px] xs:right-[178px] xxs:right-[190px] sx:right-[218px] sm:right-[255px] md:right-[352px] lg:right-[48%] xl:right-[52%] 3xl:right-[600px] 5xl:right-[56%] z-40 h-[110px] w-[170px] xs:h-[130px] xs:w-[200px] xxs:h-[150px] xxs:w-[250px] sx:h-[200px] sx:w-[320px] sm:h-[220px] sm:w-[362px] md:w-[386px] md:h-[238px] lg:w-[477px] lg:h-[295px] xl:w-[484px] xl:h-[300px] 3xl:w-[597px] 3xl:h-[370px] 5xl:h-[515px] 5xl:w-[834px]';

  return (
    <div className="-mx-4">
      <div className="relative flex items-center justify-center h-[143px] exs:h-[180px] xs:h-[200px] xxs:h-[300px] sx:h-[300px] sm:h-[350px] md:h-[357px] lg:h-[450px] xl:h-[450px] 3xl:h-[500px] 5xl:h-[700px] w-[310px] exs:w-[355px] xs:w-[380px] xxs:w-[440px] sx:w-[540px] sm:w-[620px] md:w-[740px] lg:w-[920px] xl:w-[1020px] 3xl:w-[1200px] 5xl:w-[1900px] group z-50 mx-auto mt-6 xs:mt-10 sm:mt-1 lg:mt-20 xl:mt-6 2xl:mt-0 3xl:mt-14 5xl:mt-40">
        {/* Slider 1 */}
        <div
          className={`rounded xl:rounded-xl overflow-hidden transform duration-700 absolute ${
            currentItem === 1
              ? rightPosition
              : currentItem === 2
              ? middlePostion
              : currentItem > imageSliderItems.length - 1
              ? middlePostion
              : leftPosition
          }`}
        >
          <Image
            width={1133}
            height={700}
            src={imageSliderItems[0]}
            alt="business"
            className={`rounded md:rounded-xl xl:rounded-[20px]   w-full h-full object-cover transform `}
          />
        </div>

        {/* Slider 2 */}
        <div
          className={`z-10 rounded duration-700 overflow-hidden xs:h-[100px] xs:w-[160px] absolute flex items-center justify-center ${
            currentItem === 2 || currentItem > imageSliderItems.length - 1
              ? rightPosition
              : currentItem === 1
              ? leftPosition
              : middlePostion
          }`}
        >
          <Image
            width={1133}
            height={700}
            src={imageSliderItems[1]}
            alt="business"
            className={`rounded md:rounded-xl xl:rounded-[20px]   w-full h-full object-cover transform`}
          />
        </div>

        {/* Slider 3 */}
        <div
          className={`rounded xl:rounded-xl overflow-hidden transform duration-700 absolute ${
            currentItem === 1
              ? middlePostion
              : currentItem === 2 || currentItem > imageSliderItems.length - 1
              ? leftPosition
              : rightPosition
          }`}
        >
          <Image
            width={1133}
            height={700}
            src={imageSliderItems[2]}
            alt="business"
            className={`rounded md:rounded-xl xl:rounded-[20px]  w-full h-full object-cover transform`}
          />
        </div>
      </div>

      {/* Dots Navigation */}
      <div className="flex justify-center mt-4">
        {imageSliderItems.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentItem(index)}
            className={`h-2 w-2 md:h-3 md:w-3 lg:h-4 lg:w-4 rounded-full mx-1 ${
              currentItem === index ? 'bg-gray-800' : 'bg-gray-400'
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Banner;
