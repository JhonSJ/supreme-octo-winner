import React from "react";

import styles from "./Navigation.module.css";

type Props = {
  onClickNext?: () => void;
  onClickPrev?: () => void;
};

export const Navigation = ({ onClickNext, onClickPrev }: Props) => {
  return (
    <div className={[styles.navigation_buttons, styles.fixed_top].join(" ")}>
      <button type="button" className={styles.icon_button} onClick={onClickPrev}>
        <span>up</span>
      </button>
      
      <button type="button" className={styles.icon_button} onClick={onClickNext}>
        <span>down</span>
      </button>
    </div>
  );
};
