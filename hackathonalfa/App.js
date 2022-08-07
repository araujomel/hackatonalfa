import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';


/*const teste = () => {
  fetch('http://localhost:2022/ponto')
    .then(response => response.json())
    .then(response => {
      console.log(response)
    }).catch(err => {
      console.log(err)
    })

}*/

import Pilha from './Stack';

export default function App(navigation) {

  return (

    <NavigationContainer>
      <Pilha/>
    </NavigationContainer>

    /*<View style = {styles.container}>
      <Text>AAA</Text>
      <Pilha/>
    </View>*/
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});