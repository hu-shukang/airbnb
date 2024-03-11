'use client';

import { AiOutlineMenu } from 'react-icons/ai';
import Avatar from '../Avatar';
import { useCallback, useState } from 'react';
import { useRouter } from 'next/navigation';
import MenuItem from './MenuItem';
import { useLoginModal } from '@/hooks';

const UserMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const loginModal = useLoginModal();

  const toggleOpen = useCallback(() => {
    setIsOpen(draft => !draft);
  }, []);

  return (
    <div className="relative">
      <div className="flex items-center gap-3">
        <div className="hidden cursor-pointer rounded-full px-4 py-3 text-sm font-semibold transition hover:bg-neutral-100 md:block">
          Airbnb your home
        </div>
        <div
          className="flex cursor-pointer items-center gap-3 rounded-full border-DEFAULT border-neutral-200 p-4 transition hover:shadow-md md:px-2 md:py-1"
          onClick={toggleOpen}
        >
          <AiOutlineMenu />
          <div className="hidden md:block">
            <Avatar src={null} />
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="absolute right-0 top-12 w-[40vw] overflow-hidden rounded-xl bg-white text-sm shadow-md md:w-3/4">
          <div className="flex cursor-pointer flex-col">
            <MenuItem label="Login" onClick={loginModal.onOpen} />
            <MenuItem label="Sign up" onClick={() => {}} />
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
