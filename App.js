import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Profile from './components/Profile'
import Home from './components/Home'
import Bairros from './components/Bairros'
import Login from './components/Login'

const Tab = createBottomTabNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Home">
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabelStyle: {
              fontSize: 16,
              textAlign: 'center'
            },
            headerTitle: 'Ingressos Online'
            // headerTitleStyle:
            // {
            // justifyContent: 'center',
            // }
          }}
        />
        <Tab.Screen
          name="Bairros"
          component={Bairros}
          options={{
            tabBarLabelStyle: {
              fontSize: 16,
              textAlign: 'center'
            },
            headerTitle: 'Ingressos Online'
          }}
        />

        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarLabelStyle: {
              fontSize: 16,
              textAlign: 'center'
            },
            headerTitle: 'Ingressos Online'
          }}
        />

        <Tab.Screen
          name="Login"
          component={Login}
          options={{
            tabBarLabelStyle: {
              fontSize: 16,
              textAlign: 'center'
            },
            headerTitle: 'Ingressos Online'
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
