import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { RootStackParamList } from "../../types/rootStackParamList";
import Ionicons from "@expo/vector-icons/Ionicons";
import StackRoutes from "./stackRoutes";

export default function Routes() {
  const Tab = createBottomTabNavigator<RootStackParamList>();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#FFF",

        tabBarStyle: {
          backgroundColor: "#202225",
          borderTopWidth: 0,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={StackRoutes}
        options={{
          tabBarLabel: "Inicio",
          tabBarIcon: ({ color, size }) => {
            return <Ionicons name="home" size={size} color={color} />;
          },
        }}
      />
    </Tab.Navigator>
  );
}
