import {StyleSheet} from 'react-native';
import React from 'react';
import CheckBox from '@react-native-community/checkbox';

interface customCheckBox {
  disabled?: boolean;
  checkBoxValue: boolean;
  onValueChange: (arg0: boolean) => void | undefined;
}
const CustomCheckBox: React.FC<customCheckBox> = ({
  disabled = false,
  onValueChange,
  checkBoxValue,
}) => {
  return (
    <CheckBox
      style={styles.checkBoxContainer}
      disabled={disabled}
      value={checkBoxValue}
      boxType={'square'}
      onCheckColor="#049F8F"
      tintColor="#049F8F"
      onTintColor="#049F8F"
      onValueChange={newValue => onValueChange(newValue)}
    />
  );
};

export default CustomCheckBox;

const styles = StyleSheet.create({
  checkBoxContainer: {
    height: 15,
  },
});
