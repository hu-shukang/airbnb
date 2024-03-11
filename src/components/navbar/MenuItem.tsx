import { MouseEventHandler } from 'react';

type Props = {
  onClick: MouseEventHandler<HTMLDivElement>;
  label: string;
};

const MenuItem = ({ label, onClick }: Props) => {
  return (
    <div onClick={onClick} className="px-4 py-3 font-semibold transition hover:bg-neutral-100">
      {label}
    </div>
  );
};

export default MenuItem;
