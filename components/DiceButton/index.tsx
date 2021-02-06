import React from "react";
import { Button, View } from "react-native";

interface DiceButtonProp {
  handleDiceClick: (newValue: number) => void;
  value: number;
  selectedValue: number;
}

export default function DiceButton({handleDiceClick, value, selectedValue}: DiceButtonProp) {
  return (
    <View style={{ width: 100 }} >
      <Button 
        onPress={()=>handleDiceClick(value)} 
        title={value === 0 ? 'custom' : `d${value}`} 
        color={value === selectedValue || selectedValue === -1 ? 'blue' : 'lightskyblue' }
      />
    </View>
  );
}
