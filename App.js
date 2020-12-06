import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
      <View style={{flex: 1}}>
        <View style={styles.box1}><Text style={styles.textbox1}>Hello</Text></View>
        <View style={styles.box2}><Text style={styles.textbox2}>World!</Text></View>
        <View style={styles.box3}><Text style={styles.textbox3}>You are beautiful!</Text></View>
      </View>
  );
}

const styles = StyleSheet.create({
  box1: {
    flex: 1,
    backgroundColor: 'mistyrose',
    fontSize: 30,
  },

  box2: {
    flex: 2,
    backgroundColor: 'pink',
    fontSize: 30,
  },

  box3: {
    flex: 3,
    backgroundColor: 'lightcoral',
    fontSize: 30,
  },

  textbox1: {
    fontSize: 30,
    textAlign: 'center',
    marginTop: 50,
  },

  textbox2: {
    fontSize: 35,
    textAlign: 'center',
    marginTop: 90.
  },

  textbox3: {
    fontSize: 40,
    textAlign: 'center',
    marginTop:150,
  },
});

      
