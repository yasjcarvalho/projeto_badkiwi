import React from 'react'
import { View, SafeAreaView, StyleSheet, Button, Text } from 'react-native'
import { TextInput } from 'react-native-paper'

const AlterarSenha = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <SafeAreaView maxLength={8}>
        <Text style={styles.label}>Digite nova senha:</Text>
        <TextInput style={styles.input} placeholder="Digite nova senha" />
      </SafeAreaView>
      <SafeAreaView maxLength={8}>
        <Text style={styles.label}>Confirme a senha:</Text>
        <TextInput style={styles.input} placeholder="Confirme a senha" />
      </SafeAreaView>

      <Button
        title="ALTERAR
        "
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
    backgroundColor: '#6FB1FF',
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

export default AlterarSenha
