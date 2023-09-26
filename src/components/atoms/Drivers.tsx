import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function Drivers() {
  return (
    <View style={styles.conatiner}>
      <View style={styles.deadLine} />
      <Text style={styles.text}>Or</Text>
      <View style={styles.deadLine} />
    </View>
  );
}

const styles = StyleSheet.create({
  conatiner: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  deadLine: {
    borderWidth: 1,
    width: 150,
    borderColor: '#A4A4A4',
  },
  text: {
    color: '#A4A4A4',
    padding: 12,
    fontSize: 14,
  },
});
