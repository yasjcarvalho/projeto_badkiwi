import { createStackNavigator } from '@react-navigation/stack'
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Profile from './components/Profile'
import CadastrarUsuario from './components/CadastrarUsuario'
import Home from './components/Home'
import Bairros from './components/Bairros'
import Login from './components/Login'
import AlterarSenha from './components/AlterarSenha'

import { MaterialCommunityIcons } from '@expo/vector-icons'

const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer
      screenOptions={{
        tabBarLabelStyle: {
          fontSize: 16,
          textAlign: 'center'
        },
        headerTitle: 'Ingressos Online'
      }}
    >
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{ headerTitleAlign: 'center' }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
            headerTitle: 'Ingressos Online'
          }}
        />
        <Tab.Screen
          name="Bairros"
          component={Bairros}
          options={{
            tabBarLabel: 'Bairros',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="home-group"
                color={color}
                size={size}
              />
            ),
            headerTitle: 'Ingressos Online'
          }}
        />

        <Tab.Screen
          name="Login"
          options={{
            tabBarLabel: 'Login',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="login" color={color} size={size} />
            ),
            headerTitle: 'Ingressos Online'
          }}
        >
          {() => (
            <Stack.Navigator>
              <Stack.Screen
                name="Login"
                component={Login}
                options={{
                  headerShown: false
                }}
              />
              <Stack.Screen
                name="CadastrarUsuario"
                component={CadastrarUsuario}
                options={{
                  headerShown: false
                }}
              />
              <Stack.Screen
                name="Profile"
                component={Profile}
                options={{
                  headerShown: false
                }}
              />
              <Stack.Screen
                name="AlterarSenha"
                component={AlterarSenha}
                options={{
                  headerShown: false
                }}
              />
            </Stack.Navigator>
          )}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  )
}
