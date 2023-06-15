import { StyleSheet, View, Text, Pressable } from 'react-native'
import { Button, TextInput } from 'react-native-paper'
import { SafeAreaView } from 'react-native-safe-area-context'

function Login() {
  return (
    <View style={styles.container}>
      <SafeAreaView maxLength={40}>
        <TextInput style={styles.input} placeholder="E-mail" />
      </SafeAreaView>
      <SafeAreaView maxLength={40}>
        <TextInput style={styles.input} placeholder="Senha:" />
      </SafeAreaView>

      <View styles={styles.buttons1}>
        <Text>Esqueceu a senha?</Text>

        <Text>Cadastrar Usuário</Text>
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
  }
})
export default Login
