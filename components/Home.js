import React, { useEffect, useState } from 'react'
import { View, StyleSheet, Text, Image } from 'react-native'
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

      <View>
        {eventos.slice(0, 4).map(evento => (
          <View key={evento.id}>
            <Image
              source={{ uri: evento.imagem }}
              style={{ width: 50, height: 50, border: 'solid' }}
            />
            <Text>{evento.nome}</Text>
            <Text>Data: {evento.data_evento}</Text>
            <Text>Horário: {evento.horario}</Text>
            <Text>Local: {evento.local}</Text>
          </View>
        ))}
      </View>
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
    height: '100%',
    fontSize: 16
  },
  searchIcon: {
    marginLeft: 8
  }
})

export default Home
