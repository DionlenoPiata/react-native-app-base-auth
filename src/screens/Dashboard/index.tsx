import React from 'react';
import {View, Button, Text} from 'react-native';
import styles from './styles';
import {useAuth} from '../../contexts/auth';

const Dashboard: React.FC = () => {
  const {signed, user, signOut} = useAuth();

  console.log('signed:', signed);
  console.log('user:', user);

  function handleSignOut() {
    signOut();
  }

  return (
    <View style={styles.container}>
      <Text>{user?.name}</Text>
      <Button title="SignOut" onPress={handleSignOut} />
    </View>
  );
};

export default Dashboard;
