import React from "react";
import styles from "./solver-section.module.css";
import { SolverSectionProps } from "./solver-section.types";

export const SolverSection = (props: SolverSectionProps) => {
  return <section className={styles.solverSection}>{props.children}</section>;
};
