import { Grid, Group, Text } from "@mantine/core";
import { Paper } from "@repo/ui-components";

const CardsItemArr = [
  {
    title: "Mascotas en adopción",
    value: 120,
    icon: "IconDog",
    color: "green",
  },
  {
    title: "Solicitudes activas",
    value: 75,
    icon: "IconClipboardText",
    color: "blue",
  },
  {
    title: "Eventos pendientes",
    value: 2,
    icon: "IconCalendarEvent",
    color: "orange",
  },
  { title: "Tareas pendientes", value: 8, icon: "IconListCheck", color: "red" },
];

const OverviewCards = () => {
  return (
    <Grid>
      {CardsItemArr.map((item) => (
        <Grid.Col span={{ base: 12, md: 6, lg: 2 }} key={item.title}>
          <Paper
            p="xs"
            radius="md"
            shadow="sm"
            withBorder
            w={240}
            style={{ backgroundColor: "var(--mantine-color-dark-6)" }}
          >
            <Group justify="left">
              <Text size="md">{item.title}:</Text>
              <Text c="white" size="md" fw={700}>
                {item.value}
              </Text>
            </Group>
          </Paper>
        </Grid.Col>
      ))}
    </Grid>
  );
};

export default OverviewCards;
