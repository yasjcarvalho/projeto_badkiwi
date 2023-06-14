import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Profile from './components/Profile'
import Home from './components/Home'
import Bairros from './components/Bairros'
import Login from './components/Login'
import CadastrarUsuario from './components/CadastrarUsuario'

const Tab = createBottomTabNavigator()

export default function App() {
  return (
    <NavigationContainer screenOptions={{
      tabBarLabelStyle: {
        fontSize: 16,
        textAlign: 'center'
      },
      headerTitle: 'Ingressos Online',
      }}>

      <Tab.Navigator initialRouteName="Home" screenOptions={{headerTitleAlign:"center"}}>
        

        <Tab.Screen
          name="Home"
          component={Home}
          options={{ }}
        />
        <Tab.Screen
          name="Bairros"
          component={Bairros}
          options={{ }}
        />

        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{ }}
        />

        <Tab.Screen
          name="Login"
          component={Login}
          options={{ }}
        />

        <Tab.Screen
          name="Cadastrar Usuário"
          component={CadastrarUsuario}
          options={{ }}
        />

      </Tab.Navigator>
    </NavigationContainer>
  )
}
