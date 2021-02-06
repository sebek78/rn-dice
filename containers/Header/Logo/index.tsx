import React from 'react';
import { StyleSheet, Text } from 'react-native';

export default function Logo() {
  return (
    <Text style={styles.logo}>
        Dice
    </Text>
  );
}

const styles = StyleSheet.create({
  logo: {
    padding: 4,
    fontSize: 32,
    lineHeight: 40,
    color: 'blue',
    textAlign: 'center'
  },
});
