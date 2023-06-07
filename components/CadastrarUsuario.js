import { useState } from 'react';
import { View, SafeAreaView, StyleSheet, Button} from 'react-native';
import { TextInput, Pressable } from 'react-native-paper';


const CadastroUsuario = ({navigation}) => {
  const [senha, setSenha] = useState(" ")
    
  return (
      <View style = {styles.container}>
        <SafeAreaView maxLength={40}>
          <TextInput style={styles.input} placeholder="nome:" />
        </SafeAreaView>
        <SafeAreaView maxLength={40}>
          <TextInput style={styles.input1} placeholder="Sobrenome:" />
        </SafeAreaView>
        <SafeAreaView maxLength={40}>
          <TextInput style={styles.input2} placeholder="Data de nascimento:" />
        </SafeAreaView>
        <SafeAreaView maxLength={40}>
          <TextInput style={styles.input3} placeholder="CPF:" />
        </SafeAreaView>
        <SafeAreaView maxLength={40}>
          <TextInput style={styles.input4} placeholder="Telefone:" />
        </SafeAreaView>
        <SafeAreaView maxLength={40}>
          <TextInput style={styles.input5} placeholder="E-mail:" />
        </SafeAreaView>

       
        <Button
         
         title="CADASTRAR"
         color="#37567D"
         onPress={() => {
          native()
        }}
        />
          
        










      </View>

      

  );
}

const styles = StyleSheet.create({

  container:{
    flex: 1,
    backgroundColor: "#6FB1FF",
    justifyContent:"center",
    alignItems:"center"
  },


  input:{
    height: 45,
    width: 250,
    borderRadius: 8,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    marginBottom: 16,
    Color:"black"
  },

  input1:{
    height: 45,
    width: 250,
    borderRadius: 8,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    marginBottom: 16
  },

  input2:{
    height: 45,
    width: 250,
    borderRadius: 8,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    marginBottom: 16
  },

  input3:{
    height: 45,
    width: 250,
    borderRadius: 8,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    marginBottom: 16
  },

  input4:{
    height: 45,
    width: 250,
    borderRadius: 8,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    marginBottom: 16
  },

  input5:{
    height: 45,
    width: 250,
    borderRadius: 8,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    marginBottom: 16
  },

  input6:{
    height: 45,
    width: 250,
    borderRadius: 8,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    marginBottom: 16
  },

  cadastrar: {
    textAlign: 'center',
    marginVertical: 8,
    backgroundColor:"37567D"
  },

})


export default CadastroUsuario;