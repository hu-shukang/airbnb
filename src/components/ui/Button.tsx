'use client';

import { MouseEventHandler } from 'react';
import { IconType } from 'react-icons';

type Props = {
  label: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  outline?: boolean;
  small?: boolean;
  icon?: IconType;
};

const Button = ({ label, onClick, disabled, outline, small, icon }: Props) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`relative
        w-full
        rounded-lg
        transition
        hover:opacity-80
        disabled:cursor-not-allowed
        disabled:opacity-70
        ${outline ? 'bg-white' : 'bg-rose-500'}
        ${outline ? 'border-black' : 'border-rose-500'}
        ${outline ? 'text-black' : 'text-white'}
        ${small ? 'text-sm' : 'text-base'}
        ${small ? 'py-1' : 'py-3'}
        ${small ? 'font-light' : 'font-semibold'}
        ${small ? 'border-DEFAULT' : 'border-2'}`}
    >
      {label}
    </button>
  );
};

export default Button;
