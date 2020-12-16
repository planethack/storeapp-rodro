import React from 'react';
import { Dimensions, StyleSheet, Text, TextInput, View, TouchableHighlight, Image } from 'react-native';

function FormComponent(props) {
    
    const {idProduct, code, name, description, price, quantity} = props;
    const randomNumber = Math.floor(Math.random() * 10) + 1;
    const randomImage = require('../assets/images/' + randomNumber.toString() + '.jpg');

    const createProduct = async (data) => {
        console.log(data);
        const response = await fetch(`${apiBaseUrl}/createProduct`,
            {
                method: 'POST',
                headers: {
                    Accept: 'aplication/json',
                    'Content-Type': 'aplication/json',
                },
                body: JSON.stringify(data)
            }
        );
        const dataResponse = await response.json();
    }

    const updateValue = (text, field) =>
    {
        const state = this.state;
        state[prop] = val;
        this.setState(state);
    }

    console.log(props);
    return(
        <View style={styles.box1}>
        <View style={styles.box2}>
          <Text style={styles.textStyle}>Create new product</Text>
          <Image source={randomImage} style={styles.imageStyle}></Image>
          <TextInput style={styles.input} placeholder='Code' Text={props.code} onChangeText={(text) => updateValue(text, 'code')}></TextInput>
          <TextInput style={styles.input} placeholder='Name' Text={props.name} onChangeText={(text) => updateValue(text, 'name')}></TextInput>
          <TextInput style={styles.input} placeholder='Description' Text={props.description} onChangeText={(text) => updateValue(text, 'description')}></TextInput>
          <TextInput style={styles.numericInput} placeholder='Price' Text={props.price} onChangeText={(text) => updateValue(text, 'price')}></TextInput>
          <TextInput style={styles.numericInput} placeholder='Quantity' Text={props.quantity} onChangeText={(text) => updateValue(text, 'quantity')}></TextInput>
        </View>
        <TouchableHighlight style={styles.buttonStyle} onPress={()=>createProduct(props)}>
          <Text>
            Add products
          </Text>
        </TouchableHighlight>
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      flexDirection: 'column'
    },
    box1: {
      flex: 1,
      backgroundColor: '#5886E1',
      alignItems: 'flex-start',
      
    },
    box2: {
      flex: 2,
      backgroundColor: '#fff',
      alignItems: 'flex-start',
      marginTop: 40,
      borderRadius: 20,
      elevation: 2,
      padding: 15,
      margin: 30,
      width: Dimensions.get('screen').width*0.7,
    },
    textStyle: {
      fontSize: 24,
    },
    input: {
      marginTop: 5,
      borderWidth: 1,
      borderColor: '#000',
      width: Dimensions.get('screen').width*0.6,
      borderRadius: 10,
      padding: 5,
      backgroundColor: '#fff',
  
    },
    numericInput: {
      marginTop: 5,
      borderWidth: 1,
      borderColor: '#000',
      width: Dimensions.get('screen').width*0.5,
      borderRadius: 10,
      padding: 5,
      backgroundColor: '#fff',
  
    },
    buttonStyle: {
      borderRadius: 25,
      padding: 10,
      width: Dimensions.get('screen').width*0.4,
      borderWidth: 1,
      margin: 10,
      backgroundColor: '#FD8024'
  
    },
    imageStyle: {
      width: Dimensions.get('window').width*0.4,
      height: Dimensions.get('window').height*0.2,
    }
  
  });

export default FormComponent;