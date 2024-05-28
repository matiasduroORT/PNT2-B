import React, { useContext, useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet, TextInput, Switch } from 'react-native';
import { useNavigation, NavigationContainer } from '@react-navigation/native';
import { AuthContext } from '../context/AuthContext';

export default function RegisterLoginScreen() {

  const {status, login, register} = useContext(AuthContext)
  
    const [esLogin, setEsLogin ] = useState(false)
    const [email, setEmail ] = useState('');
    const [username, setUsername ] = useState('');
    const [password, setPassword] = useState('')

    const navigation = useNavigation()

    const handleSubmit = () => {
      if(esLogin){
        login(username, password)
      }else{
        register(username, email, password)
      }
    }

    useEffect( () => {
      if( status === 'authenticated'){
        navigation.navigate('Home')
      }
    }, [status, navigation])

    // const HandleLogin = () => {
    //     if (email === 'admin' && password === 'admin'){
    //         alert('Login Conseguido')
    //         navigation.navigate('Home')
    //     }else{
    //         alert('Login Fallado')
    //     }
    // }

    // const HandleRegister = () => {
    //     if (email === 'admin@admin.com' && password === 'admin'){
    //         alert(`${nombre} se ha registrado correctamente`)
    //         navigation.navigate('Home')
    //     }else{
    //         alert('Login Fallado')
    //     }
    // }

    // const IrALogin = () => {
    //     setEsLogin(true)
    // }
  

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{ esLogin ? 'Login' : 'Registrarse'}</Text>
      
      {
        !esLogin && (
            <TextInput 
        style={ styles.input}
        placeholder='Ingrese su Email'
        value={email}
        onChangeText={setEmail}
        />
        )
      }
      <TextInput 
        style={ styles.input}
        placeholder='Ingrese su Username'
        value={username}
        onChangeText={setUsername}
      />
      <TextInput 
        style={ styles.input}
        placeholder='Ingrese su Password'
        keyboardType='password'
        value={password}
        onChangeText={setPassword}
      />
      <Button title={ esLogin ? 'Login' : 'Registrate'} onPress={handleSubmit}/>
    <View>
        <Text>{esLogin ? 'Cambia a Registro' : 'Cambia a Login'}</Text>
        <Switch value={esLogin} onValueChange={setEsLogin}/>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title:{
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center'
  },
  input:{
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10
  },
  register:{
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 20
  }
});
