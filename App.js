import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Avenger from './Avenger';

export default function App() {
  return (
    <View style={styles.container}>
      <Avenger/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
