import { useState } from "react";
import {
  IconCalendarEvent,
  IconChartBar,
  IconClipboardText,
  IconDog,
  IconListCheck,
  IconLogout,
  IconSettings,
} from "@tabler/icons-react";
import { Code, Group } from "@mantine/core";
import classes from "./NavbarSimpleColored.module.css";

const data = [
  { link: "", label: "Mascotas", icon: IconDog },
  { link: "", label: "Solicitudes", icon: IconClipboardText },
  { link: "", label: "Eventos", icon: IconCalendarEvent },
  { link: "", label: "Tareas", icon: IconListCheck },
  { link: "", label: "Estadisticas", icon: IconChartBar },
  { link: "", label: "Configuracion", icon: IconSettings },
];

export function NavbarSimpleColored() {
  const [active, setActive] = useState("Billing");

  const links = data.map((item) => (
    <a
      className={classes.link}
      data-active={(item.label === active).toString()}
      href={item.link}
      key={item.label}
      onClick={(event) => {
        event.preventDefault();
        setActive(item.label);
      }}
    >
      <item.icon className={classes.linkIcon} stroke={1.5} />
      <span>{item.label}</span>
    </a>
  ));

  return (
    <nav className={classes.navbar}>
      <div className={classes.navbarMain}>
        <Group className={classes.header} justify="space-between">
          <div style={{ fontWeight: 700, color: "white" }}>Backoffice</div>
          <Code fw={700} className={classes.version}>
            v0.0.1
          </Code>
        </Group>
        {links}
      </div>

      <div className={classes.footer}>
        <a
          href="#"
          className={classes.link}
          onClick={(event) => event.preventDefault()}
        >
          <IconLogout className={classes.linkIcon} stroke={1.5} />
          <span>Cerrar sesion</span>
        </a>
      </div>
    </nav>
  );
}

export default NavbarSimpleColored;
