import React from 'react';
import { Text, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AuthHeader from '../../../components/AuthHeader';
import Button from '../../../components/Button';
import GoogleLogin from '../../../components/GoogleLogin';
import Input from '../../../components/Input';
import Seperator from '../../../components/Seperator';
import styles from './styles';

const Signin = ({ navigation }) => {

  const SignIn = () => {
    navigation.navigate('Signup');
  }

  const onBack = () => {
    navigation.goBack();
  }

  return (
    <SafeAreaView>

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.container}>
        <AuthHeader onBackPress={onBack} title="Sign In" />

        <Input
          lable="Email"
          placeholder="example@gmail.com"
          keyboardType="email-address"
        />
        <Input isPassword lable="Password" placeholder="*****" />

        <Button style={styles.button} title='Sign In' />

        <Seperator text='or Sign up with' />

        <GoogleLogin />

        <Text style={styles.footerText}>
          Don't have an account?{' '}
          <Text onPress={SignIn} style={styles.footerLink}>Sign Up</Text>
        </Text>

      </ScrollView>
      
    </SafeAreaView>
  );
};

export default React.memo(Signin);
