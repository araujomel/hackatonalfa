import React, {useEffect, useState, useRef} from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, Alert, Platform } from 'react-native';
import RNPickerSelect from "react-native-picker-select";
import DatePicker from 'react-native-datepicker';
import { Icon } from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Checkbox } from 'react-native-paper';
import Title from '../components/TopMenu';


const RegisterRDC = ({navigation}) => {  

  return(
    <View style={styles.container}>


      <View style={styles.containerTitle}>
        <Title style={styles.text}></Title>
      </View>
      
      <TouchableOpacity style={styles.button} onPress ={() => navigation.navigate('InitialPage')}>
        <Text style={styles.buttonBack}><Ionicons name={"chevron-back-outline"} size={18}/>Voltar</Text>
      </TouchableOpacity>

      <View>
        <Text style={styles.title1}>Membros presentes na obra</Text>
      </View>
      
      <ScrollView>

        <View>
          <TouchableOpacity style={styles.barcode}>     
            <Text style={styles.buttonMembers}><Ionicons name={"person-circle-outline"} size={15}/>Adicionar Membro</Text>
          </TouchableOpacity>

          <View>
            <Text style={styles.title1}>Membros já cadastrados na obra</Text>
          </View>

          <View style={styles.nomes}>
            <Text style={styles.title2}>Fulano<Ionicons name={"trash-outline"} size={15}/></Text>
            <Text style={styles.title2}>Ciclano<Ionicons name={"trash-outline"} size={15}/></Text>
            <Text style={styles.title2}>Beltrano<Ionicons name={"trash-outline"} size={15}/></Text>
            <Text style={styles.title2}>Nome<Ionicons name={"trash-outline"} size={15}/></Text>
            <Text style={styles.title2}>Outro nome<Ionicons name={"trash-outline"} size={15}/></Text>
          </View>
        </View>
        

        
        <View>
          <TouchableOpacity style={styles.save} onPress={() => navigation.navigate("RegisterRDC2")} >     
            <Text style={styles.buttonSave}>Prosseguir com o cadastro</Text>
          </TouchableOpacity>
        </View>

      </ScrollView>

    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  containerTitle: {
    flexShrink: 0,
    minHeight: '12%'
  },
  title1: {
    fontSize: 18, 
    paddingTop: '5%',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  buttonBack: {
    fontSize: 18, 
    paddingLeft: '5%', 
    paddingTop: '2%'
  },
  buttonMembers: {
    fontSize: 15,
    color: 'white',
    textAlign: 'center'
  },
  barcode: {
    backgroundColor: '#003966',
    marginTop: '5%',
    padding: '3%',
    width: '50%',
    marginLeft: '25%',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#003966'
  },
  buttonBarcode: {
    fontSize: 15,
    color: 'white',
    textAlign: 'center'
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
  date: {
    width: '90%', 
    margin: 10, 
    marginLeft: "5%"
  },
  editIcon: {
    color: "#666666",
  },
  save: {
    backgroundColor: '#a6a6a6',
    marginLeft: '20%',
    marginTop: '5%',
    padding: '3%',
    width: '60%',
    height: '8%',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: '20%',
    borderColor: '#a6a6a6',
    minHeight: '15%'
  },
  buttonSave:{
    fontSize: 15,
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
    
  },
  nomes: {
    alignItems: 'center',
    paddingTop: 20
  },
  title2: {
    fontSize: 18,
  }
});

export default RegisterRDC;