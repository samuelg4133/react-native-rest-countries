import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Country from "../screens/Country";
import Home from "../screens/Home";

const Stack = createNativeStackNavigator();

export default function Routes(): JSX.Element {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Country" component={Country} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}
