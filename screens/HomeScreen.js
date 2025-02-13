import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>🎮 Game Haven 🎮</Text>
        <TouchableOpacity 
          style={styles.loginButton} 
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={styles.loginText}>Iniciar Sesión</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.subtitle}>Descubre juegos gratis en todas las plataformas</Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.button, styles.psButton]} onPress={() => navigation.navigate('PlayStation')}>
          <Image source={require('../assets/playstation.png')} style={styles.icon} />
          <Text style={styles.buttonText}>PlayStation Plus</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, styles.epicButton]} onPress={() => navigation.navigate('Epic Games')}>
          <Image source={require('../assets/epicgames.png')} style={styles.icon} />
          <Text style={styles.buttonText}>Epic Games Store</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, styles.xboxButton]} onPress={() => navigation.navigate('Xbox')}>
          <Image source={require('../assets/xbox.png')} style={styles.icon} />
          <Text style={styles.buttonText}>Xbox Game Pass</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, styles.primeButton]} onPress={() => navigation.navigate('Prime Gaming')}>
          <Image source={require('../assets/primegaming.png')} style={styles.icon} />
          <Text style={styles.buttonText}>Prime Gaming</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, styles.steamButton]} onPress={() => navigation.navigate('Steam')}>
          <Image source={require('../assets/steam.png')} style={styles.icon} />
          <Text style={styles.buttonText}>Steam</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginBottom: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  loginButton: {
    backgroundColor: '#00FF00',
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 20,
  },
  loginText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
  subtitle: {
    fontSize: 16,
    color: '#bbbbbb',
    marginBottom: 20,
    textAlign: 'center',
  },
  buttonContainer: {
    width: '100%',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    justifyContent: 'center',
    width: '100%',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginLeft: 10,
  },
  icon: {
    width: 30,
    height: 30,
  },
  psButton: {
    backgroundColor: '#003087',
  },
  epicButton: {
    backgroundColor: '#000',
  },
  xboxButton: {
    backgroundColor: '#107C10',
  },
  primeButton: {
    backgroundColor: '#9146FF',
  },
  steamButton: {
    backgroundColor: '#171a21',
  },
});
