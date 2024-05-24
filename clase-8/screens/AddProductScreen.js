import React, { useContext, useState } from 'react'
import { Button, Image, StyleSheet, Text, TextInput, View } from 'react-native'
import * as ImagePicker from 'expo-image-picker';
import { useNavigation } from '@react-navigation/native'
import { ProductContext } from '../context/ProductContext'

export const AddProductScreen = () => {

    const {addProduct} = useContext(ProductContext)

    const navigation = useNavigation()

    const [title, setTitle] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')
    const [category, setCategory] = useState('')
    const [ image, setImage] = useState(null)

    const handleSubmit = () => {

        const newProduct = {
            id: Math.random().toString(),
            title: title,
            price: parseFloat(price),
            description,
            category,
            image
        }
        
        console.log('El nuevo producto es: ', newProduct);

        addProduct(newProduct);
        navigation.goBack()
    }


    const subirImagen = async () => {
        let result = await ImagePicker.launchCameraAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1
        });

        console.log('SUBIR IMAGEN: ', result)

        if(!result.canceled){
            setImage(result.assets[0].uri)
        }
    }

  return (
    <View style={ styles.container}>
        <Text style={styles.title}>Agregar Nuevo Producto</Text>
        <TextInput 
           style={ styles.input}
           placeholder='Titulo'
           value={title}
           onChangeText={setTitle}
           
        />
        <TextInput 
           style={ styles.input}
           placeholder='Precio'
           value={price}
           onChangeText={setPrice}
           
        />
        <TextInput 
           style={ styles.input}
           placeholder='Descripcion'
           value={description}
           onChangeText={setDescription}
           
        />
        <TextInput 
           style={ styles.input}
           placeholder='Categoria'
           value={category}
           onChangeText={setCategory}
        />
        <Button title='Subir Imagen' onPress={subirImagen}/>
        {image && <Image source={{uri: image}} style={styles.image}/>}
        <Button title="Subir Producto" onPress={handleSubmit} />
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20
    },
    title:{
        fontSize: 24,
        marginBottom: 20,
        textAlign: 'center'
    },
    input:{
        height: 40,
        borderColor: 'grey',
        borderWidth: 1,
        marginBottom: 20,
        paddingHorizontal: 10
    },
    image:{
        width: "100%",
        height: 200,
        marginVertical: 20,
    }
})