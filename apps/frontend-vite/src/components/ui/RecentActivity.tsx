import { Grid, Image, Stack, Text, Title } from "@mantine/core";
import { Paper } from "@repo/ui-components";

const recentActivities = [
  {
    description: "Nueva solicitud de adopción recibida",
    timestamp: "Hace 2 horas",
    imageUrl:
      "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-7.png",
  },
  {
    description: "Nueva solicitud de adopción recibida",
    timestamp: "Hace 2 horas",
    imageUrl:
      "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-2.png",
  },
  {
    description: "Nueva solicitud de adopción recibida",
    timestamp: "Hace 2 horas",
    imageUrl:
      "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-5.png",
  },
];
const RecentActivityTab = () => {
  return (
    <Paper p="sm" radius="md" shadow="sm" withBorder mt="lg">
      <Stack>
        <Title order={4}>Actividad reciente</Title>

        <Grid>
          {recentActivities.map((activity) => (
            <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>
              <Image
                key={activity.description}
                h={200}
                w="100%"
                radius="md"
                src={activity.imageUrl}
              />
              <Text mt={8} size="sm">
                {activity.description}
              </Text>
              <Text c="dimmed" size="xs">
                {activity.timestamp}
              </Text>
            </Grid.Col>
          ))}
        </Grid>
      </Stack>
    </Paper>
  );
};

export default RecentActivityTab;
