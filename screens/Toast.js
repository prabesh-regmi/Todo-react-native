import React, { useState } from 'react';
import { ToastAndroid, StyleSheet, View, TouchableOpacity, Text } from 'react-native';

const App = () => {
  const showToast = () => {
    ToastAndroid.show(
        'This is a toast',
        ToastAndroid.SHORT,
        
    );
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={showToast}>
        <Text style={styles.button}>Show Toast </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#333',
    padding: 10,
    color: '#FFF',
  },
});

export default App;
