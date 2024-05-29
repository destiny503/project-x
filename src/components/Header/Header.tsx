import React from "react";
import { useTodo } from "../../utils";
import styles from "./Header.module.css";

export const Header: React.FC = () => {
  const { todos } = useTodo();
  return (
    <div className={styles.header_container}>
      <div className={styles.header_title}>
        Todo list <b>{todos.length}</b> task(s)
      </div>
    </div>
  );
};
