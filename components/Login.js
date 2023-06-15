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

  return (
    <View style={styles.container}>
      <SafeAreaView maxLength={40}>
        <TextInput style={styles.input} placeholder="E-mail" />
      </SafeAreaView>
      <SafeAreaView maxLength={40}>
        <TextInput style={styles.input} placeholder="Senha:" />
      </SafeAreaView>

      <View style={styles.buttons1}>
        <Pressable>
          <Text style={styles.esqueceu}>Esqueceu a senha?</Text>
        </Pressable>

        <Pressable onPress={navigateToCadastrarUsuario}>
          <Text style={styles.cadastrar}>Cadastrar Usuário</Text>
        </Pressable>
      </View>

      <Button
        mode="contained"
        style={styles.buttons2}
        onPress={() => {
          native()
        }}
      >
        Entrar
      </Button>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6FB1FF',
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    height: 45,
    width: 250,
    borderRadius: 8,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    marginBottom: 16
  },
  buttons1: {
    flexDirection: 'row',
    width: 250,
    marginBottom: 16,
    justifyContent: 'center',
    marginTop: 10
  },

  cadastrar: {
    marginLeft: 5
  },

  esqueceu: {
    marginRight: 5
  }
})

export default Login
