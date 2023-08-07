import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';

const CircularBackground = () => {
  return (
    <View style={styles.container}>
      <View style={styles.circularBackground} />
    </View>
  );
};

const { width } = Dimensions.get('window');
const circularSize = width * 2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -500
  },
  circularBackground: {
    width: circularSize,
    height: circularSize,
    backgroundColor: "#F3E3DA", 
    borderRadius: circularSize / 2, 
  },
});

export default CircularBackground;
