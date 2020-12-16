import React from 'react';
import { Dimensions, StyleSheet, Text, TextInput, View, TouchableHighlight, Image } from 'react-native';

function ProductComponent(props) {
    const {idProduct, code, name, description, price, quantity} = props;
    const randomNumber = Math.floor(Math.random() * 10) + 1;
    const randomImage = require('../assets/images/' + randomNumber.toString() + '.jpg');
    return(
        <View style={styles.box1}>
            <View style={styles.box2}>
                <Image source={randomImage} style={styles.imageStyle}></Image>
            </View>
            <View style={styles.box3}>
                <Text>Code: {props.code}</Text>
                <Text>{props.name}</Text>
                <Text>{props.description}</Text>
                <Text>Price: {props.price}</Text>
                <Text>Qty: {props.quantity}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        flexDirection: 'column',
        marginTop: 40,
        borderRadius: 20,
        borderWidth: 1,
    },
    box1: {
        flex: 1,
        backgroundColor: '#fff',
        marginTop: 40,
        padding: 15,
        margin: 10,
        width: 200,
        height: 300
      },
      box2: {
        flex: 2,
        backgroundColor: '#fff',
        marginTop: 40,
        padding: 15,
        margin: 10,
        width: 200,
        height: 300
      },
      box3: {
        flex: 1,
        backgroundColor: '#fff',
        marginTop: 40,
        padding: 15,
        margin: 10,
        width: 200,
        height: 300
      },
      imageStyle: {
        width: Dimensions.get('window').width*0.4,
        height: Dimensions.get('window').height*0.2,
      }
});

export default ProductComponent;