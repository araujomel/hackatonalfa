import { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import { render } from 'react-dom';
import { StyleSheet, View, TouchableOpacity, Text, Image, Alert } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import moment from 'moment'
import { ScrollView } from 'react-native-gesture-handler';


const CardApp = (props) => {
  const navigation = useNavigation();
  const [category, setCategory] = useState([]);
  const deleteAlert = () =>
    Alert.alert(
      `Rejeitar RDO`,
      `Tem certeza que deseja rejeitar o RDO?`,
      [
        {
          text: "Sim",
          style: "cancel"
        },
        {
          text: "Não",
          style: "cancel"
        }
      ]
    );


  const acceptAlert = () =>
  Alert.alert(
    `Aceitar RDO`,
    `Tem certeza que deseja aceitar o RDO?`,
    [
      {
        text: "Sim",
        style: "cancel"
      },
      {
        text: "Não",
        style: "cancel"
      }
    ]
  );
  
  
  return(
    
    <View style={styles.container}>
      
      <Card style={styles.card}>
        <View style={styles.items}>
          <Ionicons name={"document"} size={35} style={styles.iconCategory}/>
            
          <View style={styles.title}>
            {/* <Ionicons name={"pencil"} size={10} style={styles.profile}/> */}
            <View style={{flexDirection: 'column', flex: 1, flexWrap: 'wrap', flexShrink: 1}}>
              <Text style = {styles.cardTitle}>Relatório de Obra</Text>
            </View>
          </View>

        </View>

        <View style={styles.actions}>

          <View style={styles.buttons}>
            
            <TouchableOpacity style={styles.button}>
              <Ionicons name={"search-outline"} size={20} style={styles.iconEdit}/>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={() => acceptAlert()} >
              <Ionicons name={"checkmark-outline"} size={20} style={styles.iconAccept}/>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress ={() => deleteAlert()}>
              <Ionicons name={"trash-outline"} size={20} style={styles.iconDelete}/>
            </TouchableOpacity>
            
          </View>
         

          
        </View>
      </Card>

      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    paddingLeft: '5%',
    paddingRight: '5%',
    marginTop: '3%',
    borderRadius: 5,
  },
  card: {
    padding: '10%'
  },
  items: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    
    justifyContent: 'flex-start'
  },
  iconCategory: {
    
    borderRadius: 10,
    overflow: "hidden",
    padding: '3%',
    marginRight: '4%',
    marginBottom: '5%',
    borderWidth: 1,
    alignItems: 'center',
    borderColor: "#003966"
  },
  title: {
    width: '80%',
    marginTop: '3%',
    justifyContent: 'center',
  },
  cardTitle: {
    color: 'black',
    width: '100%',
    fontWeight: 'bold',
    fontSize: 18
  },
  cardSubtitle: {
  },
  actions: {
    marginTop: '2%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttons: {
    width: '100%',
    
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  button: {
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: '#003966',
    padding: '4%'
  },
  iconEdit: {
    color: 'white'
  },
  iconAccept: {
    color: 'white'
  },
  iconDelete: {
    color: 'red'
  },
})

export default CardApp