import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{color:"white",fontSize:25,textAlign:'center'}}>Hello Saad Bhai, How are you? I'm Rayhan.</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#673BB7',
    alignItems: 'center',
    justifyContent: 'center',
  },
});