import { ReactNode, useEffect } from 'react';
import Button from './Button';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: () => void;
  title?: string;
  actionLabel: string;
  disabled?: boolean;
  secoundaryAction?: () => void;
  secoundaryActionLabel?: string;
  children: ReactNode;
};

const Modal = ({ isOpen, onClose, onSubmit, title, children, actionLabel, disabled, secoundaryActionLabel }: Props) => {
  useEffect(() => {}, [isOpen]);

  return (
    <dialog ref={dialog}>
      {/* {header} */}
      <div className="text-lg font-semibold">{title}</div>
      {/* {body} */}
      <div className="relative flex-auto p-6">{children}</div>
      {/* {footer} */}
      <div className="flex w-full items-center gap-4">
        <Button disabled={disabled} label={secoundaryActionLabel ?? 'キャンセル'} onClick={onClose} outline />
        <Button disabled={disabled} label={actionLabel} onClick={onSubmit} />
      </div>
    </dialog>
  );
};

export default Modal;
