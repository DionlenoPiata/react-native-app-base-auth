import React from 'react';
import {View, Button} from 'react-native';
import styles from './styles';
import {useAuth} from '../../contexts/auth';

const SignIn: React.FC = () => {
  const {signed, user, signIn} = useAuth();

  console.log('signed:', signed);
  console.log('user:', user);

  function handleSignIn() {
    signIn();
  }

  return (
    <View style={styles.container}>
      <Button title="Sign in" onPress={handleSignIn} />
    </View>
  );
};

export default SignIn;
