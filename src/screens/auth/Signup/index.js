import React, { useState } from 'react';
import { Text, View, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AuthHeader from '../../../components/AuthHeader';
import Button from '../../../components/Button';
import Checkbox from '../../../components/Checkbox';
import GoogleLogin from '../../../components/GoogleLogin';
import Input from '../../../components/Input';
import Seperator from '../../../components/Seperator';
import styles from './styles';

const Signup = ({ navigation }) => {
  const [checked, setChecked] = useState(false);

  const SignIn = () => {
    navigation.navigate('Signin');
  }

  const onBack = () => {
    navigation.goBack();
  }

  return (
    <SafeAreaView>

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.container}>
        <AuthHeader onBackPress={onBack} title="Sign Up" />

        <Input lable="Name" placeholder="John Doe" />
        <Input
          lable="Email"
          placeholder="example@gmail.com"
          keyboardType="email-address"
        />
        <Input isPassword lable="Password" placeholder="*****" />

        <View style={styles.agreeRow}>
          <Checkbox checked={checked} onCheck={setChecked} />
          <Text style={styles.agreeText}>
            I agree with
            <Text style={styles.agreeTextBold}> Terms </Text>&
            <Text style={styles.agreeTextBold}> Privacy </Text>
          </Text>
        </View>

        <Button style={styles.button} title='Sign Up' />

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
