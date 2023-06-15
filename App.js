import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Profile from './components/Profile'
import Home from './components/Home'
import Bairros from './components/Bairros'
import Login from './components/Login'
import CadastrarUsuario from './components/CadastrarUsuario'
import { MaterialCommunityIcons } from '@expo/vector-icons'

const Tab = createBottomTabNavigator()

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
            )
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
            )
          }}
        />

        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarLabel: 'Perfil',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="account"
                color={color}
                size={size}
              />
            )
          }}
        />

        <Tab.Screen
          name="Login"
          component={Login}
          options={{
            tabBarLabel: 'Login',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="login" color={color} size={size} />
            )
          }}
        />

        <Tab.Screen
          name="Cadastrar Usuário"
          component={CadastrarUsuario}
          options={{
            tabBarLabel: 'Cadastro Usuário',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            )
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
