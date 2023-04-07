import React, { Suspense } from "react";
import "./styles/index.scss";
import { Link } from "react-router-dom";
import { classNames } from "shared/lib/classNames/classNames";
import { useTheme } from "app/providers/ThemeProvider";
import AppRouter from "./providers/router/ui/AppRouter";
import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar";


export const App = () => {
  const { theme } = useTheme();

  return (
    <div
      className={classNames("app", { hovered: true, selected: false }, [
        theme,
        "cls2",
      ])}
    >
      <Suspense fallback="">
        <Navbar />
        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};
