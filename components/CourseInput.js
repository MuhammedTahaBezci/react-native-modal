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
          <View style={styles.modalView}>
            <View style={styles.Buton}>
              <Button title="İptal Et" color="darkred"/>
            </View>
            <View style={styles.Buton}>
              <Button title="İptal Et" color="darkcyan"/>
            </View>          
          </View>
        </View>
      </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer:{

  },
  image:{

  },
  textInput:{

  },
  buton:{

  },
});
