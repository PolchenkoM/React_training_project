import React from "react";
import "./styles/index.scss";
import { Link } from "react-router-dom";
import { classNames } from "shared/lib/classNames/classNames";
import { useTheme } from "app/providers/ThemeProvider";
import AppRouter from "./providers/router/ui/AppRouter";

export const App = () => {
    const {theme, toggleTheme} = useTheme()

  return (
    <div className={classNames('app', {hovered: true, selected: false}, [theme, 'cls2'])}>
      <Link to={"/"}>Главная</Link>
      <Link to={"/about"}>О сайте</Link>
      <button onClick={toggleTheme}>Toggle</button>
      <AppRouter />
    </div>
  );
};
