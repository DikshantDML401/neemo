import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import AppHeader from '../components/AppHeader';
import TextInputFields from '../components/TextInputFields';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Feather from 'react-native-vector-icons/Feather';
import LockEye from '../assets/images/lockEye.png';
import CustomCheckBox from '../components/CustomCheckBox';
import CustomButton from '../components/CustomButton';

export default function SignUp() {
  const [UserSignUpData, setUserSignUpData] = useState({
    email: '',
    password: '',
    cnf_password: '',
  });
  const [passwordActiveIcone, setPasswordActiveIcone] =
    useState<string>('eye-with-line');
  const [checkBoxValue, setsheckBoxValue] = useState<boolean>(true);

  const handleChangeData = (value: string, key: string) => {
    setUserSignUpData(prevData => ({
      ...prevData,
      [key]: value,
    }));
  };
  const handleSignUp = () => {
    console.log(UserSignUpData, 'data');
  };
  return (
    <>
      <AppHeader marginHeader={30} activeBackHandler={true} />
      <ScrollView style={{backgroundColor: 'white'}}>
        <View style={styles.getStarted}>
          <Text style={styles.startedheading}>Let’s get started!</Text>
          <Text style={styles.subheading}>
            We ‘ll need a few things to get you signed up:
          </Text>
        </View>
        <View style={styles.textFieldContainer}>
          <View style={styles.textField}>
            <TextInputFields
              value={UserSignUpData.email}
              placeholder="Email"
              leftIcone={() => (
                <Fontisto name="email" size={20} color="#707070" />
              )}
              rightImage={false}
              handleChange={text => handleChangeData(text, 'email')}
            />
          </View>
          <View style={styles.textField}>
            <TextInputFields
              value={UserSignUpData.password}
              secureTextEntry={passwordActiveIcone !== 'eye'}
              placeholder="Password"
              onIconeChane={() => {
                let icone =
                  passwordActiveIcone === 'eye' ? 'eye-with-line' : 'eye';
                setPasswordActiveIcone(icone);
              }}
              iconeName={passwordActiveIcone}
              leftIcone={() => <Feather name="lock" size={18} color="green" />}
              rightImage={LockEye}
              handleChange={text => handleChangeData(text, 'password')}
            />
          </View>
          <View style={styles.textField}>
            <TextInputFields
              value={UserSignUpData.cnf_password}
              secureTextEntry={passwordActiveIcone !== 'eye'}
              placeholder="Confirm Password"
              onIconeChane={() => {
                let icone =
                  passwordActiveIcone === 'eye' ? 'eye-with-line' : 'eye';
                setPasswordActiveIcone(icone);
              }}
              iconeName={passwordActiveIcone}
              leftIcone={() => <Feather name="lock" size={18} color="green" />}
              rightImage={LockEye}
              handleChange={text => handleChangeData(text, 'cnf_password')}
            />
          </View>
        </View>
        <View style={styles.checkBoxRowMain}>
          <View style={styles.checkBoxRow}>
            <CustomCheckBox
              checkBoxValue={checkBoxValue}
              onValueChange={value => setsheckBoxValue(value)}
            />
            <Text style={styles.rememberText}>
              I agree with the Privacy Policy of NEEMO
            </Text>
          </View>
        </View>
        <View style={styles.button}>
          <CustomButton onPress={() => handleSignUp()} title="SignUp" />
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  getStarted: {
    backgroundColor: '#ffffff',
    paddingHorizontal: 24,
    marginTop: 50,
  },
  startedheading: {
    fontSize: 22,
    fontWeight: '700',
    lineHeight: 27,
    textAlign: 'left',
    color: '#343434',
    bottom: 5,
  },
  subheading: {
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 14,
    color: '#707070',
  },
  textFieldContainer: {
    marginVertical: 24,
  },
  textField: {
    marginVertical: '2%',
  },
  checkBoxRowMain: {
    marginLeft: 17,
  },
  checkBoxRow: {
    display: 'flex',
    flexDirection: 'row',
  },
  rememberText: {
    fontSize: 11,
    color: '#343434',
  },
  button: {
    marginTop: 40,
    margin: 23,
  },
});
