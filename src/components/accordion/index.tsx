import React, { useEffect, useRef } from 'react';
import { accordionContainer, accordionContent } from './accordion.css';
import { AccordionProps } from './accordion.interface';
import cx from 'classnames';

export const Accordion: React.FC<AccordionProps> = ({ 
  isOpen, 
  children,
  className
}) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current && contentRef.current) {
      if (isOpen) {
        containerRef.current.style.maxHeight = `${contentRef.current.scrollHeight}px`;
      } else {
        containerRef.current.style.maxHeight = '0px';
      }
    }
  }, [isOpen]);

  return (
    <div 
      ref={containerRef} 
      className={accordionContainer}
    >
      <div 
        ref={contentRef} 
        className={cx(accordionContent, className)}
      >
        {children}
      </div>
    </div>
  );
};
