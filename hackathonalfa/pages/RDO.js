import React, {useEffect, useState} from 'react';
import { StyleSheet, FlatList, View, Text, TouchableOpacity } from 'react-native';
import { FAB } from 'react-native-paper';
import CardApp from '../components/Card';
import moment from 'moment'
import Title from '../components/TopMenu';
import { ScrollView } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import axios from 'axios';
import { listarRdosPendentes } from '../server/fetchPendingRDO';
import { acceptRDO } from '../server/acceptRDO';
//import { copilot, walkthroughable, CopilotStep  } from "react-native-copilot";


const RDO = ({navigation, route})=> {

  //const CopilotText = walkthroughable(Text);

  
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true)

  useEffect ( () => {
    buscarRDOs();
  }, []);

  const renderList = ((item) => {
    return(
     <CardApp rdo={item} funcionario={route.params.funcionario}/>
    )
  })

  

  const buscarRDOs = async () => {
    const response = await listarRdosPendentes()
      console.log(response)
      if (response.status === 200) {
        setData(response.data.rdo)
        //navigate.navigate("InitialPage")
        console.log(data)

      } else {
        Alert.alert("erro")
      }
    
  }

  return(
    <View style = {styles.container}>
        <View style={styles.containerTitle}>
            <Title/>
        </View>
        <TouchableOpacity onPress={ () => navigation.navigate("Login")}>
          <Text style = {styles.backButton}><Ionicons name={"chevron-back-outline"} size={18}/>Voltar</Text>
        </TouchableOpacity>
        <ScrollView>

          <View style={styles.cards}>
          {  
          <FlatList
            data =  {data}
            renderItem = {({item}) => {
                return renderList(item)
            }}
            keyExtractor={item => item.nome}
            onRefresh = {() => buscarRDOs()}
            refreshing ={loading}
          />
        } 


          </View>
        </ScrollView>
        
    </View>
  );
} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#a6a6a6',
    width: '100%'
  },
  containerTitle: {
    flexShrink: 0,
    minHeight: '12%'
  },
  backButton: {
    marginLeft: '5%',
    fontSize: 20
  },
  cards: {
    flex:1,
    alignItems:'flex-start',
    justifyContent: 'flex-start',
    marginBottom: '5%'
  },
  card: {
  }
});

export default RDO;