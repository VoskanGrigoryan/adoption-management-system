import { Grid, Text, ThemeIcon } from "@mantine/core";
import { Paper, Button } from "@repo/ui-components";
import {
  IconDog,
  IconClipboardText,
  IconCalendarEvent,
} from "@tabler/icons-react";

const QuickActionArr = [
  {
    title: "Nueva mascota",
    icon: IconDog,
    color: "green",
  },
  {
    title: "Revisar solicitudes",
    icon: IconClipboardText,
    color: "blue",
  },
  {
    title: "Agregar tarea",
    icon: IconCalendarEvent,
    color: "orange",
  },
];

const QuickActions = () => {
  return (
    <Grid style={{ marginTop: 20 }}>
      {QuickActionArr.map((item) => {
        const Icon = item.icon;

        return (
          <Grid.Col span={{ base: 12, md: 4 }} key={item.title}>
            <Paper p="xs" radius="md" withBorder>
              <Button
                fullWidth
                variant="light"
                color={item.color}
                leftSection={
                  <ThemeIcon color={item.color} variant="light" radius="md">
                    <Icon size={18} />
                  </ThemeIcon>
                }
              >
                <Text fw={600}>{item.title}</Text>
              </Button>
            </Paper>
          </Grid.Col>
        );
      })}
    </Grid>
  );
};

export default QuickActions;
