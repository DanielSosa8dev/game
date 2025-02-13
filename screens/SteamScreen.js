import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import GameCard from '../components/GameCard';

const games = [
  { id: '1', title: 'Dota 2', image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/570/header.jpg?t=1739210483', description: 'MOBA competitivo.' },
];

export default function SteamScreen() {
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
