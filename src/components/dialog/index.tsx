import { useEffect } from 'react';
import { backdrop, modal, closeBtn } from './resume-dialog.css';

type ResumeDialogProps = {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

export const ResumeDialog = ({ open, onClose, children }: ResumeDialogProps) => {
  useEffect(() => {
    if (open) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [open]);

  if (!open) return null;

  return (
    <div className={backdrop} onClick={onClose}>
      <div className={modal} onClick={(e) => e.stopPropagation()}>
        <button className={closeBtn} onClick={onClose}>✕</button>
        {children}
      </div>
    </div>
  );
};
