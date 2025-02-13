import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import GameCard from '../components/GameCard';

const games = [
  { id: '1', title: 'Star Wars Battlefront II', image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/6060/capsule_616x353.jpg?t=1707697325', description: 'Acción en el universo Star Wars.' },
];

export default function PrimeGamingScreen() {
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
