import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { useFonts } from 'expo-font';

import Ionicons from 'react-native-vector-icons/Ionicons';

import { DrawerActions, useNavigation } from '@react-navigation/native';

export default function Title({navigation}) {


  const nav = useNavigation();

  return(
    <View style = {styles.container}>
      <Text style = {styles.text}>
        Alfa Engenharia
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#013867',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  text: {
    fontSize: 24,
    color: 'white',
    fontWeight:'bold',
  },
  icon: {
    paddingTop: '2%',
    fontSize: 30,
    color: '#013867'
  }
});