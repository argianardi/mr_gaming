'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { RiAccountPinCircleFill } from 'react-icons/ri';
import { IoIosSearch } from 'react-icons/io';

const Header = () => {
  const [bgNav, setBgNav] = useState(' ');

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
    <header className={`bg-base-100 sticky top-0 ${bgNav}`}>
      <div className="px-4 navbar sm:px-6 md:px-8 lg:px-10 xl:px-12">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Homepage</a>
              </li>
              <li>
                <a>Portfolio</a>
              </li>
              <li>
                <a>About</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-center">
          <Link href={'/'} className="btn btn-ghost text-xl font-Roboto">
            daisyUI
          </Link>
        </div>
        <div className="navbar-end">
          <button className="btn btn-ghost btn-circle">
            <IoIosSearch className="text-2xl" />
          </button>
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
