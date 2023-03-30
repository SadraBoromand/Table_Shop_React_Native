import React, { useState, useContext } from 'react';
import { Text, View, ScrollView, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { UserContext } from '../../../../App';
import AuthHeader from '../../../components/AuthHeader';
import Button from '../../../components/Button';
import Checkbox from '../../../components/Checkbox';
import GoogleLogin from '../../../components/GoogleLogin';
import Input from '../../../components/Input';
import Seperator from '../../../components/Seperator';
import { signup } from '../../../utils/backendCalls';
import { request } from '../../../utils/request';
import styles from './styles';

const Signup = ({ navigation }) => {
  const [checked, setChecked] = useState(false);
  const [values, setValues] = useState({});
  const { user, setUser } = useContext(UserContext);

  const SignIn = () => {
    navigation.navigate('Signin');
  }

  const onBack = () => {
    navigation.goBack();
  }

  const onChange = (key, value) => {
    setValues(v => ({ ...v, [key]: value }));
  }

  const onSubmit = async () => {
    try {

      if (!values?.fullName || !values?.email ||
        !values?.password || !values?.confirmPassword) {
        Alert.alert('Error', 'All fields are required');
        return;
      }

      if (values?.password !== values?.confirmPassword) {
        Alert.alert('Passwords do not match');
        return;
      }

      if (!checked) {
        Alert.alert('Please agree to the terms');
        return;
      }

      const token = await signup(values);
      setUser({ token });
      console.log('token', token);

    } catch (error) {
      console.log('error', error);
    }
  }

  return (
    <SafeAreaView>

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.container}>
        <AuthHeader onBackPress={onBack} title="Sign Up" />

        <Input
          value={values.fullName}
          onChangeText={v => onChange('fullName', v)}
          lable="Name" placeholder="John Doe" />
        <Input
          value={values.email}
          onChangeText={v => onChange('email', v)}
          lable="Email"
          placeholder="example@gmail.com"
          keyboardType="email-address"
        />
        <Input
          value={values.password}
          onChangeText={v => onChange('password', v)}
          isPassword lable="Password" placeholder="*****" />
        <Input
          value={values.confirmPassword}
          onChangeText={v => onChange('confirmPassword', v)}
          isPassword lable="confirmPassword" placeholder="*****" />

        <View style={styles.agreeRow}>
          <Checkbox checked={checked} onCheck={setChecked} />
          <Text style={styles.agreeText}>
            I agree with
            <Text style={styles.agreeTextBold}> Terms </Text>&
            <Text style={styles.agreeTextBold}> Privacy </Text>
          </Text>
        </View>

        <Button onPress={onSubmit} style={styles.button} title='Sign Up' />

        <Seperator text='or Sign up with' />

        <GoogleLogin />

        <Text style={styles.footerText}>
          Already have an account? <Text onPress={SignIn} style={styles.footerLink}>Sign In</Text>
        </Text>

      </ScrollView>

    </SafeAreaView>
  );
};

export default React.memo(Signup);
