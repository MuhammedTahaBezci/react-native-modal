import { StyleSheet, Text, View, Modal, Image, TextInput, Button } from "react-native";
import React from "react";

export default function CourseInput({visible}) {
  return (
    <Modal
        animationType="slide"
        visible={visible}
        >
        <View style={styles.inputContainer}>
          <Image style={styles.image} source = {require(
            '../assets/images/logo.png'
          )}/>
          <TextInput style={styles.textInput} placeholder="Yeni Kurs Ekle"/>
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button title="İptal Et" color="#D87093"/>
            </View>
            <View style={styles.button}>
              <Button title="İptal Et" color="#4682B4"/>
            </View>          
          </View>
        </View>
      </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#5F9EA0",
    padding: 20
  },
  image:{
    width: 150,
    height: 150,
    borderRadius: 20,
    margin:20
  },
  textInput:{
    borderWidth: 1.5,
    width: '100%',
    backgroundColor: '#F0F8FF',
    borderColor: '#F0F8FF',
    padding:10,
    borderRadius: 10
  },
  buttonContainer:{
    flexDirection: 'row',
    marginTop: 15,

  },
  button:{
    width: 100,
    marginHorizontal:10,
  },
});
