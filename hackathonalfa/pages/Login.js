import * as React from 'react';
import { View, Text, ScrollView, StyleSheet, TextInput, TouchableOpacity, Alert, Button } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Title from '../components/TopMenu';
import axios from 'axios';
import { login } from '../server/loginServices';
import { useNavigation } from '@react-navigation/native';
import InitialPage from './Initial';


const Login = ({ navigation, route }) => {
  const [value, setValues] = React.useState({ cpf: "", senha: "" });
  const navigate = useNavigation()
  

  const requestOptions = { 
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ postName: 'React updates ' })
  };

  //verifica se a senha possui seis caracteres e recebe os valores do servidor para comparacao
  const verificarLogin = async () => {
    if (value) {
      if (value.senha.length>=6) {
        const response = await login(value.cpf, value.senha)
        console.log(response)
        //se os valores corresponderem aos recebidos, direciona a tela inicial
        if (response.status === 200 && response.data.loginValido == '1') {
          navigate.navigate("RDO", response.data.cpf)

        } else {
          Alert.alert("erro")
        }
      }else{
        //Alert.alert("A senha deve possuir no mínimo 6 caracteres")
      }
    }
  }

  return (
    <View style={styles.container}>

      <View style={styles.containerTitle}>
        <Title />
      </View>

      <View style={styles.screen}>
        <Ionicons name={"person-circle-outline"} size={120} style={styles.iconLogin} />
        <TextInput
          style={styles.input}
          onChangeText={nameInput => setValues({ ...value, cpf: nameInput })}
          value={value.cpf}
          keyboardType="numeric"
          placeholder="CPF"
          placeholderTextColor={"#666666"}
        />
        <TextInput
          style={styles.input}
          secureTextEntry={true}
          onChangeText={nameInput => setValues({ ...value, senha: nameInput })}
          value={value.senha}
          keyboardType="default"
          placeholder="Senha"
          placeholderTextColor={"#666666"}
        />
        <TouchableOpacity onPress={verificarLogin}>
          <Text>Entrar</Text>
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
  buttonSave: {
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
  screen: {
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: "space-around",
  }
})

export default Login;