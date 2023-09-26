import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import {useNavigation} from '@react-navigation/native';
import logo from '../assets/images/logo.png';

interface HeaderProps {
  activeBackHandler: boolean;
  marginHeader: number;
}
export default function AppHeader<HeaderProps>({
  marginHeader,
  activeBackHandler,
}) {
  const navigation = useNavigation<any>();
  return (
    <View style={styles.mainConatiner}>
      <View style={styles.subConatiner}>
        {activeBackHandler && (
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}>
            <Entypo name="chevron-small-left" size={30} color="grey" />
          </TouchableOpacity>
        )}
      </View>
      <View style={[styles.logo, {marginTop: marginHeader}]}>
        <Image source={logo} style={{width: 74, height: 82}} />
        <Text style={styles.logoText}>Neemo</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainConatiner: {
    backgroundColor: '#ffffff',
    // height: 270,
  },
  logo: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoText: {
    justifyContent: 'center',
    alignItems: 'center',
    color: '#049F8F',
    fontSize: 44,
    fontWeight: '400',
  },
  subConatiner: {
    flexDirection: 'row',
    marginTop: 10,
    alignItems: 'center',
    marginHorizontal: 10,
  },
  backButton: {
    width: 100,
  },
});
