import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import GameCard from '../components/GameCard';

const games = [
  { id: '1', title: 'Halo Infinite', image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1240440/header.jpg?t=1738694980', description: 'Shooter icónico de Xbox.' },
  { id: '2', title: 'Forza Horizon 5', image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1551360/header.jpg?t=1737050285', description: 'Carreras de mundo abierto.' },
];

export default function XboxGamePassScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={games}
        renderItem={({ item }) => <GameCard game={item} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    paddingTop: 20,
  },
});
