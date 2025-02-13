import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import GameCard from '../components/GameCard';

const games = [
  { id: '1', title: 'Humankind', image: 'https://cdn2.unrealengine.com/product-landscape-image-2560x1440-c2033c1f32fb.jpg?resize=1&w=480&h=270&quality=medium', description: 'Estrategia 4X en la historia.' },
  { id: '2', title: 'Fortnite', image: 'https://cdn2.unrealengine.com/en-bxeco-33-00-shooter-egs-launcher-blade-2560x1440-2560x1440-b5e6412780c7.jpg?resize=1&w=480&h=270&quality=medium', description: 'Battle royale gratuito.' },
];

export default function EpicGamesScreen() {
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
