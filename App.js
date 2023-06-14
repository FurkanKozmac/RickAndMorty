import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CharacterScreen } from "./screens/CharacterScreen";
import { HomeScreen } from "./screens/HomeScreen";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          options={{ headerShown: false }}
          name="Home"
          component={HomeScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="CharacterScreen"
          component={CharacterScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
