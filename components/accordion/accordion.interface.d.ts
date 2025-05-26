export interface AccordionProps {
    /**
     * Whether the accordion is open
     */
    isOpen: boolean;
    /**
     * Content to be displayed when the accordion is open
     */
    children: React.ReactNode;
    /**
     * Optional additional class name
     */
    className?: string;
}
