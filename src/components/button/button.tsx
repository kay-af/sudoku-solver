import styles from "./button.module.css";
import { ButtonProps } from "./button.types";

export const Button = (props: ButtonProps) => {
  return (
    <button className={styles.button} {...props}>
      {props.icon && <span className={styles.buttonIcon}>{props.icon}</span>}
      <span className={styles.buttonContent}>{props.children}</span>
    </button>
  );
};
