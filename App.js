import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Slider from './src/components/Slider';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Slider />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
});
