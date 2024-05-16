import { createNativeStackNavigator } from "@react-navigation/native-stack"
// import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"

import Login from "../pages/SignIn"
import Welcome from "../pages/Welcome"
import InitialRoute from "../pages/InitialRoute"
import Card from "../pages/Card/Card"

const Stack = createNativeStackNavigator()
// const Tab = createBottomTabNavigator()

export default function Routes() {
    return (
        <Stack.Navigator
        initialRouteName="Welcome"
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
            <Stack.Screen
                name="Initial"
                component={InitialRoute}
            />

            <Stack.Screen
                name="Card"
                component={Card}
            />
        </Stack.Navigator>
    )
}