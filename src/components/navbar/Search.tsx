'use client';

import { BiSearch } from 'react-icons/bi';

const Search = () => {
  return (
    <div className="w-full cursor-pointer rounded-full border-DEFAULT py-2 shadow-sm transition hover:shadow-md md:w-auto">
      <div className="flex flex-row items-center justify-between">
        <div className="px-6 text-sm font-semibold">abcd</div>
        <div className="hidden flex-1 border-x-DEFAULT px-6 text-center text-sm font-semibold sm:block">abcd</div>
        <div className="flex grow items-center gap-3 pr-2 ps-6 text-sm text-gray-600">
          <div className="hidden sm:block">abcd</div>
          <div className="rounded-full bg-rose-500 p-2 text-white">
            <BiSearch size={18} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
