import { useWindowSize } from "react-use";
import styles from "./main.module.css";
import { MainProps } from "./main.types";

export const Main = (props: MainProps) => {
  const windowSize = useWindowSize();
  return (
    <main className={styles.main} style={{ ...windowSize }}>
      {props.children}
    </main>
  );
};
