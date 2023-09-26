import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

interface CustomButton {
  text?: String;
  onPress: () => void | undefined;
}
const CustomButton: React.FC<CustomButton> = ({text, onPress}) => {
  return (
    <TouchableOpacity onPress={() => onPress()}>
      <View style={styles.button}>
        <Text style={styles.title}>SIGN UP</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#049F8F',
    padding: 15,
    borderRadius: 5,
  },
  title: {
    color: '#FFFFFF',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
});
