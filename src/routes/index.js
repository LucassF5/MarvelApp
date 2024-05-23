import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Image } from 'react-native'

import Login from "../pages/SignIn"
import Welcome from "../pages/Welcome"
import InitialRoute from "../pages/InitialRoute"
import Card from "../pages/Card/Card"
import Search from "../pages/SearchCharacter/Search"
import Perfil from "../pages/Perfil/Perfil"

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

function TabRoutes() {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                // tabBarShowLabel: false,
                tabBarStyle: {
                    backgroundColor: "#000",
                    borderTopColor: "#000",
                    // borderTopStartRadius: 20,
                    // borderTopEndRadius: 20,
                    height: 60
                },
                tabBarActiveTintColor: "#fff",
                tabBarInactiveTintColor: "#999",
                // tabBarInactiveBackgroundColor: "#a1a1a1", // Cor de fundo da aba inativa/opcional
                tabBarLabelStyle: {
                    fontSize: 12,
                    fontWeight: "bold"
                },
            }}
        >
            <Tab.Screen
                name="Personagens"
                component={InitialRoute}
                options={{
                    tabBarIcon: () => (
                        <Image source={require('../assets/HMR.png')}
                            style={{ width: 35, height: 35 }} />
                    )
                }}
            />

            <Tab.Screen
                name="Search"
                component={Search}
                options={{
                    tabBarIcon: () => (
                        <Image source={require('../assets/SRC.png')}
                            style={{ width: 35, height: 35 }} />
                    )
                }}
            />

            <Tab.Screen
                name="Perfil"
                component={Perfil}
                options={{
                    tabBarIcon: () => (
                        <Image source={require('../assets/B-panther.png')}
                            style={{ width: 35, height: 35 }} />
                    )
                }}
            />
        </Tab.Navigator>
    )
}

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
                name="TabRoutes"
                component={TabRoutes}
            />

            <Stack.Screen
                name="Card"
                component={Card}
            />
        </Stack.Navigator>
    )
}