'use client';

import { IoIosSearch } from 'react-icons/io';
import { useRef, useEffect, useState, ChangeEvent } from 'react';

interface SearchIputPropsType {
  customClass?: string;
  handleSearchFilter: (searchText: string) => void;
  isShowSortKey?: boolean;
}

const SearchInput = ({
  customClass,
  handleSearchFilter,
  isShowSortKey = true,
}: SearchIputPropsType) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [searchInput, setSearchInput] = useState('');

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.ctrlKey && event.key === 'k') {
        event.preventDefault();
        inputRef.current?.focus();
      }
    };

    if (isShowSortKey) {
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      if (isShowSortKey) {
        document.removeEventListener('keydown', handleKeyDown);
      }
    };
  }, [isShowSortKey]);

  const searchInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchInput(event.target.value);
    handleSearchFilter(event.target.value);
  };

  return (
    <label
      className={`input input-bordered flex items-center w-full gap-2 ${customClass}`}
    >
      <IoIosSearch className="text-xl md:text-2xl lg:text-3xl flex-shrink-0" />
      <input
        type="text"
        ref={inputRef}
        placeholder="Cari atau masukan nama game.."
        className="font-Roboto w-full text-sm md:text-base lg:text-lg"
        onChange={searchInputChange}
      />
      {isShowSortKey && (
        <div className="flex-shrink-0">
          <kbd className="kbd">ctrl</kbd>+<kbd className="kbd">K</kbd>
        </div>
      )}
    </label>
  );
};

export default SearchInput;
