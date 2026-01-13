import { Title } from "@mantine/core";
import Layout from "./components/containers/Layout";
import RecentActivityTab from "./components/ui/RecentActivity";
import OverviewCards from "./components/ui/OverviewCards";
import QuickActions from "./components/ui/QuickActions";

function App() {
  return (
    <Layout>
      <Title mb={12}>Panel de control</Title>
      
      <OverviewCards />

      <RecentActivityTab />

      <QuickActions />
    </Layout>
  );
}

export default App;
