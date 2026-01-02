import React from "react";
import NavbarSimpleColored from "../navbar/NavbarSimpleColored";
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
        <div className={classes.topbar}>
          <div>Backoffice</div>
          <div>Actions</div>
        </div>
        <main>{children}</main>
      </div>
    </div>
  );
}
