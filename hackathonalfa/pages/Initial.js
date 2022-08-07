import * as React from 'react';
import { View, Text, ScrollView, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Title from '../components/TopMenu';

export default function InitialPage({navigation}) {
  return(
    <View style = {styles.container}>

      <View style={styles.containerTitle}>
        <Title style={styles.text}></Title>
      </View>


      <View style={styles.screen}>
      <Ionicons name={"person-circle-outline"} size={120} style={styles.iconLogin}/>
      <TextInput
        style={styles.input}
        /* onChangeText={nameInput => onChangeName(nameInput)} */
        /* value={name} */
        keyboardType="numeric"
        placeholder="Tela inicial"
        placeholderTextColor={"#666666"}
      />
      <TextInput
        style={styles.input}
        secureTextEntry={true}
        /* onChangeText={nameInput => onChangeName(nameInput)} */
        /* value={name} */
        keyboardType="default"
        placeholder="Senha"
        placeholderTextColor={"#666666"}
      />
      <TouchableOpacity 
          style={styles.save}
          /* onPress={() =>
            {route.params?
              updateData() : submitData()
            } 
            } */
            onPress={() => navigation.navigate("RegisterRDC")}
        >     
        <Text style={styles.buttonSave}>Entrar</Text>
      </TouchableOpacity>
      </View>
    </View>
  );

  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  containerTitle: {
    flexShrink: 0,
    minHeight: '12%'
  },
  iconLogin: {
    color: "#003966",
    backgroundColor: 'transparent',
    margin: "12%"
  },
  input: {
    height: 40,
    width: '90%',
    margin: 12,
    borderColor: "#a6a6a6",
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 5,
    marginLeft: "5%"
  },
  buttonSave:{
    fontSize: 15,
    color: '#ffffff',
    textAlign: 'center',
    fontWeight: 'bold',
    
  },
  save: {
    backgroundColor: '#003966',
    marginTop: '20%',
    width: '40%',
    height: '8%',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: '10%',
    borderColor: '#003966',
    height: "10%"
  },
  screen:{
    backgroundColor: 'transparent', 
    alignItems: 'center',
    justifyContent: "space-around",
  }
})