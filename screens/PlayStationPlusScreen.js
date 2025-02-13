import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import GameCard from '../components/GameCard';

const games = [
  { id: '1', title: 'God of War', image: 'https://gmedia.playstation.com/is/image/SIEPDC/god-of-war-listing-thumb-01-ps4-us-12jun17', description: 'Aventura épica con Kratos.' },
  { id: '2', title: 'The Last of Us', image: 'https://gmedia.playstation.com/is/image/SIEPDC/the-last-of-us-part-i-keyart-01-en-18may22', description: 'Un viaje de supervivencia.' },
];

export default function PlayStationPlusScreen() {
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
