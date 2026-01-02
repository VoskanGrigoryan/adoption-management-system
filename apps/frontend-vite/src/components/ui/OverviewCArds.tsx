import { Badge, Grid, Group, Text } from "@mantine/core";
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
        <Grid.Col span={{ base: 12, md: 6, lg: 3 }} key={item.title}>
          <Paper p="sm" radius="md" shadow="sm" withBorder>
            <Group justify="center">
              <Text size="xl">{item.title}</Text>
              <Badge color="indigo" radius="lg" size="xl">
                {item.value}
              </Badge>
            </Group>
          </Paper>
        </Grid.Col>
      ))}
    </Grid>
  );
};

export default OverviewCards;
