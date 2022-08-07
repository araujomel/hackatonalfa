import React, {useEffect, useState, useRef} from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, Alert, Platform } from 'react-native';
import RNPickerSelect from "react-native-picker-select";
import DatePicker from 'react-native-datepicker';
import { Icon } from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Checkbox } from 'react-native-paper';
import Title from '../components/TopMenu';


const RegisterRDC2 = ({navigation}) => {  

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

      <TouchableOpacity style={styles.barcode}>     
        <Text style={styles.buttonMembers}><Ionicons name={"person-circle-outline"} size={15}/>Adicionar Membro</Text>
      </TouchableOpacity>

{/* 
      <TextInput
        style={styles.input}
        keyboardType="default"
        placeholder=" "
        placeholderTextColor={"#666666"}
      /> */}



      <TextInput
        style={styles.input}
        placeholder="Quantidade de alimentos"
        keyboardType="numeric"
        placeholderTextColor={"#666666"}
      />
      {/*
      <RNPickerSelect
        value={packaging}
        onValueChange={(packagingInput) => setPackaging(packagingInput)}
        style={pickerStyle}
        useNativeAndroidPickerStyle={false}
        placeholder={{
          label: "Embalagem",
          color: "#666666",
          value: null
        }}
        items={[
            { label: "Plástico", value: "Plástico" },
            { label: "Papel", value: "Papel" },
            { label: "Vidro", value: "Vidro" },
            { label: "Metal", value: "Metal" },
            { label: "Madeira", value: "Madeira" }
        ]}
        Icon={() => {
          return <Icon
              name="chevron-down-outline"
              type="ionicon"
              underlayColor="transparent"
              iconStyle={styles.editIcon}
          />
        }}
      />
      */}
      <DatePicker
          mode="date"
          placeholder="Data de validade"
          format="YYYY/MM/DD"
          minDate= {new Date()}
          confirmBtnText="Confirmar"
          cancelBtnText="Cancelar"
          customStyles={dateStyle}
          style={styles.date}
          onDateChange={(date) => {
            setDate(date);
            setValidationDate(date);
          }}
        />

      <Text style={{textAlign: 'justify', padding: '5%'}}>* Os campos abaixo são para alimentos cuja data de validade muda após sua abertura</Text>

      <View style={{flexDirection: 'row', paddingLeft: '3%', alignItems: 'center'}}>
        <Checkbox
          color="#6C9810"
          uncheckedColor="#6C9810"
        /> 
        <Text>O produto foi aberto?</Text>
      </View>
      

      <DatePicker
          mode="date"
          placeholder="Data de validade após abrir"
          format="YYYY/MM/DD"
          minDate= {new Date()}
          confirmBtnText="Confirmar"
          cancelBtnText="Cancelar"
          customStyles={dateStyle}
          style={styles.date}
        />

      <Text style={{textAlign: 'justify', padding: '5%'}}>* Personalize abaixo quando quer ser notificado quanto ao vencimento do produto</Text>

      <View style={{flexDirection: 'row', paddingLeft: '3%', alignItems: 'center'}}>
        <Checkbox
          color="#6C9810"
          uncheckedColor="#6C9810"
        /> 
        <Text>Deseja ser notificado?</Text>
      </View>

      <TextInput
        style={styles.input}
        placeholder="Notificar em quantos dias antes de vencer"
        keyboardType="numeric"
        placeholderTextColor={"#666666"}
      />

      <TouchableOpacity style={styles.save}>     
        <Text style={styles.buttonSave}>Salvar</Text>
      </TouchableOpacity>
      </ScrollView>
    </View>
  );
}


const pickerStyle = {
	inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    color: 'black',
  },
	inputAndroid: {
    height: 40,
    width: '90%',
    margin: 12,
    borderColor: "#a6a6a6",
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 5,
    marginLeft: "5%",
    color: "black"
	},
	placeholder: { color: "#666666"},
	underline: { borderTopWidth: 0 },
  iconContainer: {
    top: "35%",
    right: "8%",
  }
};

const dateStyle = {
  dateIcon: {
    position: 'absolute',
    right: 0,
    top: 4,
    marginLeft: 0,
  },
  dateInput: {
    fontSize: 14.5,
    borderColor : "#a6a6a6",
    alignItems: "flex-start",
    borderWidth: 1,
    borderRadius: 5,
    width: '100%',
    borderBottomWidth: 1,
    paddingLeft: '3%'
  },
  placeholderText: {
    fontSize: 14.5,
    color: "#666666",
  },
  dateText: {
    fontSize: 17,
  }
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
    backgroundColor: '#E7FFB5',
    marginLeft: '30%',
    marginTop: '5%',
    padding: '3%',
    width: '40%',
    height: '8%',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: '20%',
    borderColor: '#6C9810'
  },
  buttonSave:{
    fontSize: 15,
    color: '#6C9810',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default RegisterRDC2;