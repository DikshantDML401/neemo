import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

export default function Footer() {
  const navigation = useNavigation<any>();
  return (
    <View style={styles.footerContainer}>
      <Text style={styles.footerTxt}>
        Don’t have an account?
        <Text
          style={styles.footerLinks}
          onPress={() => navigation.navigate('SignUp')}>
          Sign up
        </Text>{' '}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  footerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    paddingBottom: 60,
  },
  footerTxt: {
    color: '#757575',
  },
  footerLinks: {
    color: '#049F8F',
  },
});
