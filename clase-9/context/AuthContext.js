import React, { createContext, useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {

    const [status, setStatus] = useState('checking');

    useEffect(() => {
        const cargarEstadoAuth = async () => {
            const isAuthenticated = await AsyncStorage.getItem('isAuthenticated')

            if(isAuthenticated === 'true'){
                setStatus('authenticated')
            }else{
                setStatus('unauthenticated')
            }

        };

        cargarEstadoAuth()
    }, [])


    const login = async (username, password) => {

        try {
            
            const respuesta = await fetch('https://6656578f9f970b3b36c51233.mockapi.io/api/v1/usuarios');
            const users = await respuesta.json()
            console.log('users: ', users);
            
            const user = users.find( element => element.username === username && element.password === password)
            
            console.log('user: ', user);
            if (user){
                await AsyncStorage.setItem('isAuthenticated', 'true')
                setStatus('authenticated')
            }else{
                setStatus('unauthenticated')
            }
            
        } catch (error) {
            console.error('Error en el fetch: ', error)
            alert('Error en login')
        }
        // https://6656578f9f970b3b36c51233.mockapi.io/api/v1/usuarios
    }

    const register = async (username, email, password) => {

        try {
            const respuesta = await fetch('https://6656578f9f970b3b36c51233.mockapi.io/api/v1/usuarios',{
                method: 'POST',
                headers: {
                    'Content-Type':'application/json',
                },
                body: JSON.stringify({
                    username,
                    email,
                    password
                })
            });

            if(respuesta.ok){
                alert('Registro Exitoso')
            } else {
                alert('Error en el registro');
            }
        } catch (error) {
            console.error('Fallo el registro: ', error)
            alert('Error al registrarse')
        }
    }

    const logout = async () => {
        await AsyncStorage.removeItem('isAuthenticated');
        setStatus('unauthenticated')
    }
   


  
  
 return (
    <AuthContext.Provider value={{ status, login, register, logout}}>
        { children }
    </AuthContext.Provider>
 )
}

