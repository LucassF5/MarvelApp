import { createNativeStackNavigator } from "@react-navigation/native-stack"

import Login from "../pages/SignIn"
import Welcome from "../pages/Welcome"

const Stack = createNativeStackNavigator()

export default function Routes() {
    return (
        <Stack.Navigator
        screenOptions={{
            headerTitle: "", //Titulo do cabeçalho das Stacks
            headerShown: false // Mostrar cabeçalho
        }}>
            <Stack.Screen
                name="Welcome"
                component={Welcome}
            />

            <Stack.Screen
                name="Login"
                component={Login}
            />
        </Stack.Navigator>
    )
}