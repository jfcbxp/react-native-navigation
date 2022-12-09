import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "./types/rootStackParamList";
import Home from "./src/pages/Home";
import Sobre from "./src/pages/Sobre";

export default function App() {
  const Stack = createNativeStackNavigator<RootStackParamList>();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
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
    </NavigationContainer>
  );
}
