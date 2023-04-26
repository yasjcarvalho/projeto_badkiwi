import { useState } from 'react'
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  SafeAreaView,
  TextInput,
  Image
} from 'react-native'

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')

  console.log(email)
  const checkLogin = () => {
    navigation.navigate('Profile')
  }

  //  return(

  //   stateLogin ?

  //     <View style={styles.container}>
  //       <Text> Home </Text>
  //     </View> : <View>
  //       <Text> Login</Text>
  //     </View>
  //   )
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <View style={styles.divImagem}>
          <Image
            style={styles.imagem}
            source={require('../assets/LOGOiO.png')}
          />
        </View>

        <SafeAreaView style={styles.divInput} maxLength={40}>
          <TextInput
            style={styles.input}
            placeholder="exemplo@exemplo.com"
            onChange={e => setEmail(e.target.value)}
          />
          <TextInput style={styles.input} placeholder="senha" />
        </SafeAreaView>

        <View style={styles.buttons}>
          <View style={styles.buttons1}>
            <Pressable //onPress={onPressFunction1}
            >
              <Text style={styles.esqueceu}>Esqueceu a senha?</Text>
            </Pressable>

            <Pressable //onPress={onPressFunction2}
            >
              <Text style={styles.cadastrar}>Cadastrar usuário</Text>
            </Pressable>
          </View>

          <View style={styles.buttons2}>
            <Pressable
              onPress={() => {
                checkLogin()
              }}
            >
              <Text style={styles.entrar}>Entrar</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  body: {
    flex: 1,
    backgroundColor: '#6FB1FF'
  },
  divImagem: {
    flex: 0.3,
    justifyContent: 'center',
    alignItems: 'center'
  },

  imagem: {
    width: 200,
    height: 200
  },

  divInput: {
    flex: 0.3,
    alignItems: 'center',
    justifyContent: 'flex-end'
  },

  input: {
    height: 45,
    width: 250,
    borderRadius: 8,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    marginBottom: 16
    // borderWidth: 1,
    // borderColor: '#000',
  },

  buttons: {
    flex: 0.3,
    flexDirection: 'column',
    gap: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },

  buttons1: {
    flexDirection: 'row',
    gap: 10
  },

  esqueceu: {
    accessibilityLabel: 'Botão para editar perfil',
    width: 150,
    height: 36,
    textAlign: 'center',
    paddingTop: 6,
    border: 'solid #ffffff',
    borderRadius: 10,
    color: '#000000'
  },

  cadastrar: {
    accessibilityLabel: 'Botão para editar perfil',
    width: 150,
    height: 36,
    textAlign: 'center',
    paddingTop: 6,
    border: 'solid #ffffff',
    borderRadius: 10,
    color: '#000000'
  },

  entrar: {
    color: '#000000',
    borderRadius: 10,
    accessibilityLabel: 'Botão para editar perfil',
    width: 150,
    height: 36,
    textAlign: 'center',
    paddingTop: 6,
    border: 'solid #ffffff'
  }
})

export default Login
