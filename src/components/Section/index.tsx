import React, { useEffect } from "react";

import styles from "./Section.module.css";

type Props = {
  children?: React.ReactNode;
  bgColor?: string;
  onVisible?: () => void;
  sectionRef?: HTMLDivElement | null;
};

export const Section = React.forwardRef<HTMLDivElement, Props>(
  ({ children, bgColor, onVisible, sectionRef }, ref) => {

    useEffect(() => {
      const observerConfig = {
        // rootMargin: `0px 0px -200px 0px`,
        threshold: 0.55,
      };

      const handleIntersection: IntersectionObserverCallback = function (
        entries
      ) {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            onVisible?.();
          }
        });
      };

      const observer = new IntersectionObserver(
        handleIntersection,
        observerConfig
      );

      if (sectionRef) {
        observer.observe(sectionRef);
      }

      return () => observer.disconnect();
    }, [onVisible, sectionRef]);

    return (
      <section
        className={styles["root-section"]}
        ref={ref}
        style={{
          backgroundColor: bgColor,
        }}
      >
        {children}
      </section>
    );
  }
);

Section.displayName = "Section";
