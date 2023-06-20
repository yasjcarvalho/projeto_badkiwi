import React from 'react'
import { StyleSheet, View, Text, Pressable } from 'react-native'
import { Button, TextInput } from 'react-native-paper'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'

function Login() {
  const navigation = useNavigation()

  const navigateToCadastrarUsuario = () => {
    navigation.navigate('CadastrarUsuario')
  }
  const navigateToProfile = () => {
    navigation.navigate('Profile')
  }
  const navigateToAlterarSenha = () => {
    navigation.navigate('AlterarSenha')
  }
  return (
    <View style={styles.container}>
      <SafeAreaView maxLength={40}>
        <Text style={styles.label}>E-mail:</Text>
        <TextInput style={styles.input} placeholder="Digite seu e-mail" />
      </SafeAreaView>
      <SafeAreaView maxLength={40}>
        <Text style={styles.label}>Senha:</Text>

        <TextInput style={styles.input} placeholder="Digite sua senha" />
      </SafeAreaView>

      <View style={styles.buttons1}>
        <Pressable onPress={navigateToAlterarSenha}>
          <Text style={styles.esqueceu}>Esqueceu a senha?</Text>
        </Pressable>

        <Pressable onPress={navigateToCadastrarUsuario}>
          <Text style={styles.cadastrar}>Cadastrar Usuário</Text>
        </Pressable>
      </View>

      <Pressable onPress={navigateToProfile}>
        <Text style={styles.buttons2}>Entrar</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F06F06',
    justifyContent: 'center',
    alignItems: 'center'
  },

  label: {
    fontWeight: 'bold'
  },
  input: {
    height: 45,
    width: 250,
    borderRadius: 8,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    marginBottom: 16,
    fontWeight: 'bold'
  },
  buttons1: {
    flexDirection: 'row',
    width: 250,
    marginBottom: 16,
    justifyContent: 'center',
    marginTop: 10
  },

  cadastrar: {
    marginLeft: 5,
    fontWeight: 'bold'
  },

  esqueceu: {
    marginRight: 5,
    fontWeight: 'bold'
  },

  buttons2: {
    backgroundColor: '#fff',
    fontWeight: 'bold',
    color: '#000000',
    borderRadius: 8,
    height: 40,
    width: 105,
    textAlign: 'center',
    paddingTop: 8
  }
})

export default Login
