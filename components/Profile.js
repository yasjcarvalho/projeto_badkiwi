import { StyleSheet, View, Text, Image, Pressable } from 'react-native';



const Profile = () => {
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <View style={styles.picture}>
        <View style={styles.usuario1}>
          <Image
            style={styles.fotoPerfil}
            source={require('../assets/yo.png')}
          />
</View>
          <View style={styles.usuario}>
            <Text>Yasmin Jandriele</Text>
            <Text>yasminjandriele@hotmail.com</Text>
          </View>
        </View>

        <View style={styles.buttons1}>
          <Pressable //onPress={onPressFunction}
          >
            <Text style={styles.buttonPerfil}>Editar Perfil</Text>
          </Pressable>

          <Pressable //onPress={onPressFunction}
          >
            <Text style={styles.buttonSenha}>Alterar Senha</Text>
          </Pressable>
        </View>

        <View style={styles.buttons2}>
          <Pressable //onPress={onPressFunction1}
          >
            <Text style={styles.buttonPerfil}>Suporte</Text>
          </Pressable>

          <Pressable //onPress={onPressFunction2}
          >
            <Text style={styles.buttonPerfil}>LGPD</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  body: {
    flex: 1,
    backgroundColor: '#6FB1FF',
  },
  picture: {
    flexDirection: 'row',
    flex: 0.3,    
  },
  
  fotoPerfil: {
    marginTop: 40,
    marginLeft: 5,
    borderRadius: 200,
    width: 140,
    height: 140,
  },

  usuario1: {
    flex: 0.443,

  },
  
  usuario: {
    flex: 0.567,
        alignItems: 'flex-start', 
        justifyContent: 'center'
  },

  buttons1: {
    gap: 10,
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },

  
  buttons2: {
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 0.2,
  },

  buttonPerfil: {
    color: '#000000',
    backgroundColor: '#ffffff',
    borderRadius: 10,
    accessibilityLabel: 'Botão para editar perfil',
    width: 150,
    height: 36,
    textAlign: 'center',
    paddingTop: 6,
    border: 'solid #ffffff',
  },

  buttonSenha: {
    color: '000000',
    backgroundColor: '#ffffff',
    borderRadius: 10,
    accessibilityLabel: 'Botão para alterar senha',
    width: 150,
    height: 36,
    textAlign: 'center',
    paddingTop: 6,
    border: 'solid #0ffffff',
  },



});

export default Profile;
