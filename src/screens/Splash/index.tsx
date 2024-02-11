import React from 'react';
import {View, ActivityIndicator} from 'react-native';
import styles from './styles';

const Splash: React.FC = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#999" />
    </View>
  );
};

export default Splash;
