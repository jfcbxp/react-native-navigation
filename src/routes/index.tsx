import StackRoutes from "./stackRoutes";
import { createDrawerNavigator } from "@react-navigation/drawer";
import CustomDrawer from "../components/CustomDrawer";

export default function Routes() {
  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator
      drawerContent={CustomDrawer}
      screenOptions={{
        headerShown: true,
        drawerStyle: {
          backgroundColor: "#FFF",
        },
        drawerActiveBackgroundColor: "#00dae4",
        drawerActiveTintColor: "#FFF",
        drawerInactiveBackgroundColor: "#f1f1f1",
        drawerInactiveTintColor: "#000",
      }}
    >
      <Drawer.Screen name="HomeStack" component={StackRoutes}></Drawer.Screen>
    </Drawer.Navigator>
  );
}
