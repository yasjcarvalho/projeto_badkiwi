import React from 'react'
import { View, SafeAreaView, StyleSheet, Button, Text } from 'react-native'
import { TextInput } from 'react-native-paper'

const CadastroUsuario = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <SafeAreaView maxLength={40}>
        <Text style={styles.label}>Nome:</Text>
        <TextInput style={styles.input} placeholder="Digite seu nome" />
      </SafeAreaView>
      <SafeAreaView maxLength={40}>
        <Text style={styles.label}>Sobrenome:</Text>
        <TextInput style={styles.input} placeholder="Digite seu sobrenome" />
      </SafeAreaView>
      <SafeAreaView maxLength={40}>
        <Text style={styles.label}>Data de nascimento:</Text>
        <TextInput style={styles.input} placeholder="Digite sua data de nas" />
      </SafeAreaView>
      <SafeAreaView maxLength={40}>
        <Text style={styles.label}>CPF:</Text>
        <TextInput style={styles.input} placeholder="Digite seu CPF" />
      </SafeAreaView>
      <SafeAreaView maxLength={40}>
        <Text style={styles.label}>Telefone:</Text>
        <TextInput style={styles.input} placeholder="Digite seu telefone" />
      </SafeAreaView>
      <SafeAreaView maxLength={40}>
        <Text style={styles.label}>E-mail:</Text>
        <TextInput style={styles.input} placeholder="Digite seu e-mail" />
      </SafeAreaView>

      <Button
        title="CADASTRAR"
        color="#37567D"
        onPress={() => {
          native()
        }}
      />
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
  input: {
    height: 40,
    width: 250,
    borderRadius: 8,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    marginBottom: 6
  },
  label: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#fff'
  }
})

export default CadastroUsuario
