import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import logo from '../assets/images/logo.png';
import {SafeAreaView} from 'react-native-safe-area-context';
import mailLogo from '../assets/images/mailImg.png';
import {useNavigation} from '@react-navigation/native';
import Drivers from './atoms/Drivers';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Footer from './footer';

const Home = () => {
  const navigation = useNavigation();
  const handleGoogleLink = () => {
    console.log('Google Location Link');
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.logoWrapper}>
          <Image source={logo} style={{width: 74, height: 82}} />
          <Text style={styles.heading}>Neemo</Text>
        </View>
        <View style={styles.loginWrapper}>
          <Text style={styles.textWrapper}>Login to Neemo </Text>
        </View>
        <View style={styles.inputField}>
          <Image source={mailLogo} style={styles.svgLogo} />
          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <Text style={styles.inputTypeWrraper}>Login with Email </Text>
          </TouchableOpacity>
        </View>
        <Drivers />
        <View style={styles.iconsContainer}>
          <TouchableOpacity onPress={handleGoogleLink}>
            <AntDesign name="google" size={30} color="#049F8F" />
          </TouchableOpacity>
        </View>
      </ScrollView>
      <Footer />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  logoWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
  },
  heading: {
    fontSize: 44,
    fontWeight: '400',
    color: '#049F8F',
  },
  loginWrapper: {
    marginTop: 70,
    marginLeft: 20,
  },
  textWrapper: {
    fontSize: 22,
    fontWeight: '700',
    color: '#343434',
  },
  inputField: {
    flex: 1,
    flexDirection: 'row',
    height: 41,
    backgroundColor: '#049F8F',
    borderRadius: 4,
    margin: 20,
    marginTop: 35,
  },
  svgLogo: {
    margin: 10,
    marginLeft: 15,
  },
  inputTypeWrraper: {
    borderLeftWidth: 1,
    borderColor: 'white',
    fontSize: 14,
    fontWeight: '700',
    color: '#FFFFFF',
    textAlign: 'center',
    marginLeft: 10,
    padding: 10,
    paddingLeft: 20,
  },
  iconsContainer: {
    marginLeft: 168,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 50,
    width: 50,
    height: 50,
    backgroundColor: '#E4F2E5',
    borderColor: '#E4F2E5',
    marginVertical: 10,
  },
});
