import React from "react";
import NavbarSimpleColored from "../navbar/Navbar";
import classes from "./Layout.module.css";

type LayoutProps = {
  children?: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div className={classes.root}>
      <aside className={classes.sidebar}>
        <NavbarSimpleColored />
      </aside>
      <div className={classes.content}>
        <main>{children}</main>
      </div>
    </div>
  );
}
