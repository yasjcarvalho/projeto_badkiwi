import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Login from '../components/Login'
import Profile from './components/Profile'
import CadastrarUsuario from './components/CadastrarUsuario'
import AlterarSenha from './components/AlterarSenha'

const Stack = createStackNavigator()

const LoginNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="CadastrarUsuario" component={CadastrarUsuario} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="AlterarSenha" component={AlterarSenha} />
    </Stack.Navigator>
  )
}

export default LoginNavigator
