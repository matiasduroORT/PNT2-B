import React, { useContext, useEffect, useState } from 'react'
import { Button, FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { ProductCard } from '../components/ProductCard'
import { ProductContext } from '../context/ProductContext'

export const HomeScreen = ({navigation}) => {

    //https://fakestoreapi.com/products

    const { productos, setProductos, totalCarrito } = useContext(ProductContext)


    

    useEffect(() => {
      fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then( data => setProductos(data))
    }, [])

    const renderItem = ({ item }) => (
        <TouchableOpacity 
        style={styles.touchable}
        key={item.id}
        onPress={() => navigation.navigate('ProductDetail', { product: item})}
        >
        <ProductCard 
            title={item.title}
            price={item.price}
            image={item.image}
            description={item.description}
            category={item.category}    
            />
        </TouchableOpacity>
    )
    

  return (
    <View style={styles.container}>
        {/* <ScrollView
            contentContainerStyle={ styles.scrollContainer}
        >
        {
            productos.map(producto => (
                <ProductCard 
                    key={producto.id} 
                    title={producto.title}
                    price={producto.price}
                    image={producto.image}
                    description={producto.description}
                    category={producto.category}    
                />
            ))
        }
        </ScrollView>       */}
        <Text style={styles.carrito}>Items en Carrito:{totalCarrito()}</Text>
        <Button
            title="Agregar Producto"
            onPress={ () => navigation.navigate('AddProducto')}
        />
        <FlatList
            data={productos}
            renderItem={ renderItem }
            keyExtractor={ item => item.id.toString()}
            contentContainerStyle={ styles.flatListContainer}
            numColumns={2}
        />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        justifyContent: 'center'
    },
    carrito:{
        fontSize: 24,
        fontWeight: 'bold',
        marginVertical: 20,
        textAlign: 'center'
    },
    scrollContainer:{
        alignItems: 'center'
    },
    flatListContainer:{
        justifyContent: 'center'
    },
    touchable:{
        flex: 1,
        margin: 10,
        maxWidth: '45%'
    }
})