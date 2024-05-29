import React from "react";
import styles from "./App.module.css";
import { Header } from "./components/Header/Header";
import { TodoList } from "./components/TodoList/TodoList";
import { TodoPanel } from "./components/TodoPanel/TodoPanel";
import { TodoProvider } from "./utils";

export const App = () => {
  return (
    <TodoProvider>
      <div className={styles.app_container}>
        <div className={styles.container}>
          <Header />
          <TodoPanel mode="add" />
          <TodoList />
        </div>
      </div>
    </TodoProvider>
  );
};
