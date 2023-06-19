import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Login from '../components/Login'
import Profile from './components/Profile'
import CadastrarUsuario from './components/CadastrarUsuario'

const Stack = createStackNavigator()

const LoginNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="CadastrarUsuario" component={CadastrarUsuario} />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  )
}

export default LoginNavigator
