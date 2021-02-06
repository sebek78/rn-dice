import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './containers/Header';
import Nav from './containers/Nav';
import ResultBox from './containers/ResultBox'

export default function App() {

  const [selectedValue, setValue] = useState(-1);
  const [result, setResult] = useState(0);

  useEffect(()=>{
    console.log(result);
  },[result]);

  const handleDiceClick = (newValue: number): void => {
    setValue(newValue);
    setResult(Math.floor(Math.random()*newValue)+1);
  }

  return (
    <View style={styles.container}>
      <Header />
      <Nav handleDiceClick={handleDiceClick} selectedValue={selectedValue} />
      <ResultBox result={result} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffe6',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
