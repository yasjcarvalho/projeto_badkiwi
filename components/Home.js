import React from 'react'
import { View, StyleSheet } from 'react-native'
import { TextInput } from 'react-native-paper'
import Icon from 'react-native-vector-icons/Ionicons'

const Home = ({ navigation }) => {
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
