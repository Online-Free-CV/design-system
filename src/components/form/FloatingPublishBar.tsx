import { floatingBar, floatingBarExit, publishButton, dotAnimation, logoStyle } from "./floating-publish-bar.css";
import { Text } from "@components/text";
import { useFormikContext } from "formik";
import { Logo } from "@assets/icons/logo";
import React from "react";

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

export const FloatingPublishBar = ({isSubmitting}: FloatingPublishBarProps) => {
  const { dirty, values } = useFormikContext();
  const [isVisible, setIsVisible] = React.useState(false);
  const [isExiting, setIsExiting] = React.useState(false);

  React.useEffect(() => {
    if (dirty) {
      setIsVisible(true);
      setIsExiting(false);
    } else {
      setIsExiting(true);
      const timer = setTimeout(() => setIsVisible(false), 500);
      return () => clearTimeout(timer);
    }
  }, [dirty]);

  if (!isVisible) return null;

  return (
    <div className={`${floatingBar} ${isExiting ? floatingBarExit : ""}`}>
      <div className={logoStyle}>
        <Logo />
      </div>
      <button className={publishButton} type="submit" style={{ backgroundImage: (values as any).themeColor?.gradient }}>
        {isSubmitting ? (
          <span style={{ display: "flex" }}>
            <Text variant="body1">Publishing</Text>
            <span className={dotAnimation}>
              <span>.</span>
              <span>.</span>
              <span>.</span>
            </span>
          </span>
        ) : (
          <Text variant="body1">Publish Changes</Text>
        )}
      </button>
    </div>
  );
};
