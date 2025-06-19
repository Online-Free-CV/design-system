import { useState } from 'react';
import { ResumeDialog } from '.';
import { Button } from '../button'; 

export default {
  title: 'DesignSystem/OnlineFreeCV/ResumeDialog',
  component: ResumeDialog,
};

export const Default = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button label='Open Resume' onClick={() => setOpen(true)}/>

      <ResumeDialog open={open} onClose={() => setOpen(false)}>
        <div style={{ width: '794px', height: '1123px', background: '#eee', padding: '2rem' }}>
          <h1>Sample Resume</h1>
          <p>This is an A4-sized mock resume.</p>
        </div>
      </ResumeDialog>
    </>
  );
};
