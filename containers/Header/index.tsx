import React from 'react';
import { StyleSheet, View } from 'react-native';
import Logo from './Logo'

export default function Header() {
  return (
    <View style={styles.container}>
        <Logo />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100vw',
    alignItems: 'center',
    justifyContent: 'flex-start',
    border: '1px solid blue',
    maxHeight: 50
  },
});
