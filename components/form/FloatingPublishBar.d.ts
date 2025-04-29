/**
 * FloatingPublishBar component to show a floating bar with a publish button.
 * It appears when the form is dirty and disappears when the form is clean.
 *
 * @param {boolean} isSubmitting - Indicates if the form is currently submitting.
 * @returns {JSX.Element|null} The floating publish bar or null if not visible.
 */
interface FloatingPublishBarProps {
    isSubmitting: boolean;
}
export declare const FloatingPublishBar: ({ isSubmitting }: FloatingPublishBarProps) => import("react/jsx-runtime").JSX.Element | null;
export {};
