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
<<<<<<< HEAD
    <NavigationContainer screenOptions={{
      tabBarLabelStyle: {
        fontSize: 16,
        textAlign: 'center'
      },
      }}>

      <Tab.Navigator initialRouteName="Home" screenOptions={{headerTitleAlign:"center"}}>
        

=======
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
>>>>>>> 0aa32ad3b77147b91656d7a696975d99ca0caf8f
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
<<<<<<< HEAD
            ),
            headerTitle:"Ingressos Online"
=======
            )
>>>>>>> 0aa32ad3b77147b91656d7a696975d99ca0caf8f
          }}
        />
        <Tab.Screen
          name="Bairros"
          component={Bairros}
<<<<<<< HEAD
          options={{ 
            tabBarLabel:"Bairros",
            tabBarIcon:({color,size}) => (
              <MaterialCommunityIcons name="home-group" color={color} size={size} />
            ),
            headerTitle:"Ingressos Online"
           }}
=======
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
>>>>>>> 0aa32ad3b77147b91656d7a696975d99ca0caf8f
        />

        <Tab.Screen
          name="Profile"
          component={Profile}
<<<<<<< HEAD
          options={{ 
            tabBarLabel:"Perfil",
            tabBarIcon:({color,size}) => (
              <MaterialCommunityIcons name="account" color={color} size={size} />
            ),
            headerTitle:"Ingressos Online"
           }}
=======
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
>>>>>>> 0aa32ad3b77147b91656d7a696975d99ca0caf8f
        />

        <Tab.Screen
          name="Login"
          component={Login}
          options={{
<<<<<<< HEAD
            tabBarLabel:"Login",
            tabBarIcon:({color,size}) => (
            <MaterialCommunityIcons name="login" color={color} size={size} />
          ),
          headerTitle:"Ingressos Online"
         }}
=======
            tabBarLabel: 'Login',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="login" color={color} size={size} />
            )
          }}
>>>>>>> 0aa32ad3b77147b91656d7a696975d99ca0caf8f
        />

        <Tab.Screen
          name="CadastrarUsuario"
          component={CadastrarUsuario}
          options={{
            tabBarLabel: 'Cadastro Usuário',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
<<<<<<< HEAD
            ),
            headerTitle:"Ingressos Online"
           }}
=======
            )
          }}
>>>>>>> 0aa32ad3b77147b91656d7a696975d99ca0caf8f
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
