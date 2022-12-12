import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../types/rootStackParamList";
import Home from "../pages/Home";
import Sobre from "../pages/Sobre";

export default function StackRoutes() {
  const Stack = createNativeStackNavigator<RootStackParamList>();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          title: "Tela Inicial",
          headerStyle: {
            backgroundColor: "#2222",
          },
          headerTintColor: "777",
        }}
      />
      <Stack.Screen
        name="Sobre"
        component={Sobre}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
