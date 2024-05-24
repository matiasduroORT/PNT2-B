import React, { useContext, useState } from 'react'
import { Button, Image, StyleSheet, Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { ProductContext } from '../context/ProductContext';

export const ProductDetailScreen = ({ route }) => {

    const producto = route.params.product;
    
    const { addToCart, RemoveFromCart} = useContext(ProductContext)

    const [cantidad, setCantidad ] = useState(1)

    const navigation = useNavigation()

    const handleSubirCarrito = () => {
        console.log('la cantidad es: ', cantidad);
        addToCart({...producto, cantidad})
        navigation.goBack();
    }

    const handleSacarCarrito = () => {

        RemoveFromCart(producto.id)
        navigation.goBack();
    }


  return (
    <View style={ styles.container}>
        <Image 
            style={ styles.image}
            resizeMode='contain'
            source={{uri: producto.image}}
        />
        <Text style={ styles.title}>{producto.title}</Text>
        <Text style={ styles.description}>{producto.description}</Text>
        <Text style={ styles.price}>{producto.price}</Text>
        <Text style={ styles.category}>{producto.category}</Text>
        <View style={ styles.counterContainer}>
            <Button title='-' onPress={ () => setCantidad(Math.max(1, cantidad - 1))}/>
            <Text style={ styles.cantidad}>{cantidad}</Text>
            <Button title='+' onPress={ () => setCantidad(cantidad + 1)}/>
        </View>
        <Button title="Agregar al carrito" onPress={handleSubirCarrito} />
        <Button title='Remover del carrito' onPress={handleSacarCarrito} />

    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding: 20,
        justifyContent: 'center'
    },
    image:{
        width: '100%',
        height: 200,
        marginBottom: 10
    },
    title:{
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    description:{
        fontSize: 16,
        marginBottom: 20,
    },
    category:{
        fontSize: 12,
        marginBottom: 20,
    },
    price:{
        fontSize: 18,
        color: 'green',
        marginBottom: 20
    },
    counterContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20
    },
    cantidad:{
        fontSize: 18,
        marginHorizontal: 20
    }
})