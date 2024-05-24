import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TextInput, Switch } from 'react-native';
import { useNavigation, NavigationContainer } from '@react-navigation/native';

export default function RegisterLoginScreen() {

    const [esLogin, setEsLogin ] = useState(false)
    const [email, setEmail ] = useState('');
    const [nombre, setNombre ] = useState('');
    const [password, setPassword] = useState('')

    const navigation = useNavigation()

    const HandleLogin = () => {
        if (email === 'admin' && password === 'admin'){
            alert('Login Conseguido')
            navigation.navigate('Home')
        }else{
            alert('Login Fallado')
        }
    }

    const HandleRegister = () => {
        if (email === 'admin@admin.com' && password === 'admin'){
            alert(`${nombre} se ha registrado correctamente`)
            navigation.navigate('Home')
        }else{
            alert('Login Fallado')
        }
    }

    const IrALogin = () => {
        setEsLogin(true)
    }
  

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{ esLogin ? 'Login' : 'Registrarse'}</Text>
      
      {
        !esLogin && (
            <TextInput 
        style={ styles.input}
        placeholder='Ingrese su Nombre'
        value={nombre}
        onChangeText={setNombre}
        />
        )
      }
      <TextInput 
        style={ styles.input}
        placeholder='Ingrese su Email'
        value={email}
        onChangeText={setEmail}
      />
      <TextInput 
        style={ styles.input}
        placeholder='Ingrese su Password'
        value={password}
        onChangeText={setPassword}
      />
      <View style={styles.register}>
        {
            esLogin 
            ? 
            (
            <Button title='Iniciar Sesion' onPress={HandleLogin} />
            )
            : 
            (
            <>
            <Button title={ esLogin ? 'Login' : 'Registrate'} onPress={HandleRegister}/>
            <Button title='Iniciar Sesion' onPress={IrALogin} />
            </>
            )
        }
      </View>
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
