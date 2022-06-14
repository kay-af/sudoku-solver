import React from "react";
import styles from "./main.module.css";
import { useWindowSize } from "react-use";
import { MainProps } from "./main.types";

export const Main = (props: MainProps) => {
  const windowSize = useWindowSize();
  return (
    <main className={styles.main} style={{ ...windowSize }}>
      {props.children}
    </main>
  );
};
