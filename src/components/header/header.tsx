import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./header.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div style={{ flex: 1, width: "0px" }}>9x9 Sudoku Solver</div>
      <a href="https://github.com/kay-af/sudoku-solver">
        <FontAwesomeIcon icon={faGithub} color="white" />
      </a>
      <a href="https://www.linkedin.com/in/afridi-kayal/">
        <FontAwesomeIcon icon={faLinkedin} color="white" />
      </a>
    </header>
  );
};
