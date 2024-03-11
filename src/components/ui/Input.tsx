'use client';

import { forwardRef } from 'react';
import { useFormContext } from 'react-hook-form';

type Props = {
  name: string;
  label: string;
  type?: string;
  disabled?: boolean;
};

const Input = forwardRef<HTMLInputElement, Props>(({ name, label, disabled, type = 'text' }, ref) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <div className="relative w-full">
      <input
        type={type}
        id={name}
        disabled={disabled}
        {...register(name)}
        ref={ref}
        className={`peer
          w-full
          rounded-md
          border-2
          bg-white
          p-4
          pt-6
          font-light
          outline-none
          transition
          disabled:cursor-not-allowed
          disabled:opacity-70
          ${errors[name] ? 'border-rose-500' : 'border-neutral-300'}
          ${errors[name] ? 'focus:border-rose-500' : 'focus:border-black'}`}
      />
      <label
        htmlFor={name}
        className={`absolute
          top-5
          z-10
          origin-[0]
          -translate-y-3
          text-base
          duration-150
          peer-placeholder-shown:translate-y-0
          peer-placeholder-shown:scale-100
          peer-focus:-translate-y-4
          peer-focus:scale-75${errors[name] ? 'text-rose-500' : 'text-zinc-400'}`}
      >
        {label}
      </label>
      {errors[name] && <span>{errors[name]?.message as string}</span>}
    </div>
  );
});

Input.displayName = 'Input';

export default Input;
