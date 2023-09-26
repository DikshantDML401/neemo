import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import AppHeader from '../../components/AppHeader';
import TextInputFields from '../../components/atoms/TextInputFields';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Feather from 'react-native-vector-icons/Feather';
import LockEye from '../../assets/images/lockEye.png';
import CustomCheckBox from '../../components/atoms/CustomCheckBox';
import CustomButton from '../../components/atoms/CustomButton';
import {useDispatch} from 'react-redux';
import {AppDispatch} from '../../redux/store/store';
import {userSignUp} from '../../redux/slice/authAction';
import {removeLocalStorage} from '../../api/asyncStorage/storage';
import {userSignUpHandleChangeData} from '../../redux/slice/authSlice';
import {userProfileDataChange} from '../../redux/slice/myProfileSlice/myProfileSlice';
import {useAppSelector} from '../../redux/reduxHooks/hooks';

export default function SignUp() {
  const {userSignUpData, loading} = useAppSelector(
    state => state.AuthSliceState,
  );
  const [passwordActiveIcone, setPasswordActiveIcone] =
    useState<string>('eye-with-line');
  const dispatch = useDispatch<AppDispatch>();
  const [checkBoxValue, setsheckBoxValue] = useState<boolean>(true);
  const [errors, setErrors] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });
  const handleChange = (value: string, key: string) => {
    dispatch(userSignUpHandleChangeData({key, value}));
  };
  const handleSignUp = () => {
    const newErrors = {
      email: '',
      password: '',
      confirmPassword: '',
    };
    const validateEmail = (data: string) => {
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      return emailRegex?.test(data);
    };

    const validatePassword = (data: string) => {
      const passwordRegex =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

      return passwordRegex?.test(data);
    };
    console.log(userSignUpData, 'data');
    if (!validateEmail(userSignUpData.email)) {
      newErrors.email = 'Email is required';
    }

    if (!validatePassword(userSignUpData.password)) {
      newErrors.password = 'Password is required';
    }

    if (!validatePassword(userSignUpData.confirmPassword)) {
      newErrors.confirmPassword = 'Confirm Password is required';
    }

    if (userSignUpData.password !== userSignUpData.confirmPassword) {
      newErrors.confirmPassword = 'Password and Confirm Password must match';
    } else {
      dispatch(userSignUp({...userSignUpData}))
        .then(response => {
          if (response.payload?.code === 200) {
            dispatch(
              userProfileDataChange({
                key: 'email',
                value: userSignUpData?.email,
              }),
            );
            removeLocalStorage('logindata');
          } else {
            console.log('erororro');
          }
        })
        .catch(error => {
          setErrors(error?.payload?.message);
        });
    }
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
              value={userSignUpData.email}
              placeholder="Email"
              leftIcone={() => (
                <Fontisto name="email" size={20} color="#707070" />
              )}
              rightImage={false}
              handleChange={text => handleChange(text, 'email')}
            />
          </View>
          {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}
          <View style={styles.textField}>
            <TextInputFields
              value={userSignUpData.password}
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
              handleChange={text => handleChange(text, 'password')}
            />
          </View>
          {errors.password && (
            <Text style={styles.errorText}>{errors.password}</Text>
          )}
          <View style={styles.textField}>
            <TextInputFields
              value={userSignUpData.confirmPassword}
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
              handleChange={text => handleChange(text, 'confirmPassword')}
            />
          </View>
          {errors.confirmPassword && (
            <Text style={styles.errorText}>{errors.confirmPassword}</Text>
          )}
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
  errorText: {
    color: 'red',
    fontSize: 12,
    marginTop: 5,
    margin: 24,
  },
});
