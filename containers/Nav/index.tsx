import React from "react";
import { StyleSheet, View } from "react-native";
import DiceButton from '../../components/DiceButton'

interface NavProp {
  handleDiceClick: (newValue: number) => void;
  selectedValue: number;
}

export default function Nav({handleDiceClick, selectedValue}: NavProp) {
  return (
    <View style={styles.container}>
      <DiceButton 
        handleDiceClick={handleDiceClick}
        value={6}
        selectedValue={selectedValue}
      />
      <DiceButton 
        handleDiceClick={handleDiceClick}
        value={20}
        selectedValue={selectedValue}
      />
      <DiceButton 
        handleDiceClick={handleDiceClick} 
        value={0}
        selectedValue={selectedValue}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100vw",
    alignItems: "center",
    justifyContent: "space-evenly",
    border: "1px solid red",
    flexDirection: 'row',
    maxHeight: 100, /* test only */
  },
});
