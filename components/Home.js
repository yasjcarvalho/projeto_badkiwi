import React, { useEffect, useState } from 'react'
import {
  View,
  ScrollView,
  StyleSheet,
  Text,
  Image,
  FlatList
} from 'react-native'
import { TextInput } from 'react-native-paper'
import Icon from 'react-native-vector-icons/Ionicons'
import axios from 'axios'

const Home = ({ navigation }) => {
  const [eventos, setEventos] = useState([])

  useEffect(() => {
    const fetchEventos = async () => {
      try {
        const response = await axios.get(
          'https://648a14fc5fa58521cab0c3ad.mockapi.io/eventos'
        )

        response.data.forEach(e => {
          e.imagem =
            'https://www.sp.senac.br/documents/51838645/51838647/GettyImages-858790856.jpg/9cf62117-05e1-ffc8-7c4a-a046cc318d21?version=1.0&t=1663166319568'
        })
        setEventos(response.data)
      } catch (error) {
        console.error('Erro ao carregar os eventos:', error)
      }
    }

    fetchEventos()
  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <TextInput
          style={styles.input}
          placeholder="Eventos, organizadores e locais"
          placeholderTextColor="#888"
        />
        <Icon name="search" size={24} color="#888" style={styles.searchIcon} />
      </View>

      <FlatList
        data={eventos}
        renderItem={({ item }) => (
          <View key={item.id} style={styles.eventoContainer}>
            <Image source={{ uri: item.imagem }} style={styles.imagem} />
            <Text style={styles.nome}>{item.nome}</Text>
            <Text>Data: {item.data_evento}</Text>
            <Text>Horário: {item.horario}</Text>
            <Text>Local: {item.local}</Text>
          </View>
        )}
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
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    borderRadius: 8,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    marginBottom: 16
  },
  input: {
    flex: 1,
    height: 50,
    fontSize: 16
  },
  searchIcon: {
    marginLeft: 8
  },
  scrollView: {
    flexDirection: 'row',
    marginBottom: 16
  },
  eventoContainer: {
    marginRight: 16
  },
  imagem: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: 'black'
  },
  nome: {
    fontWeight: 'bold',
    marginBottom: 4
  }
})

export default Home
