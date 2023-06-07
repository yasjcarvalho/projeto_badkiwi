import { useState } from 'react';
import { View, SafeAreaView, StyleSheet, Button} from 'react-native';
import { TextInput, Pressable,  } from 'react-native-paper';


const CadastroUsuario = ({navigation}) => {
  
    
  return (
      <View style = {styles.container}>
        <SafeAreaView maxLength={40}>
          <TextInput  style={styles.input} placeholder="nome:" />
        </SafeAreaView>
        <SafeAreaView maxLength={40}>
          <TextInput  style={styles.input} placeholder="Sobrenome:" />
        </SafeAreaView>
        <SafeAreaView maxLength={40}>
          <TextInput style={styles.input} placeholder="Data de nascimento:" />
        </SafeAreaView>
        <SafeAreaView maxLength={40}>
          <TextInput style={styles.input} placeholder="CPF:" />
        </SafeAreaView>
        <SafeAreaView maxLength={40}>
          <TextInput style={styles.input} placeholder="Telefone:" />
        </SafeAreaView>
        <SafeAreaView maxLength={40}>
          <TextInput activeOutlineColor={"red"} style={styles.input} placeholder="E-mail:" />
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
  },

  cadastrar: {
    textAlign: 'center',
    marginVertical: 8,
    backgroundColor:"37567D"
  },

})


export default CadastroUsuario;