import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import { useState } from 'react';
import CourseInput from './components/CourseInput';

export default function App() {
  // Modalın görünürlüğünü yönetmek için state (false: gizli, true: görünür)
  const [modalIsVisible, setModalIsVisible] = useState(false);
  // Kurs listesini tutmak için state (boş dizi)
  const [courses, setCourses] = useState([]);
  
  
  const startModal = () =>{
    setModalIsVisible(true);
  };

  const endModal = () =>{
    setModalIsVisible(false);
  };

  const addCourse = (courseTitle) => {
    // courseTitle'ın boş olup olmadığını veya sadece boşluk karakterleri içerip içermediğini kontrol edin
    if (courseTitle.trim() === '') {
      alert('Lütfen bir kurs adı girin!'); // Kullanıcıyı uyarmak için alert mesajı gösterin
      return; // Boş kurs eklemeyi engelle
    }
  
    setCourses((currentCourses) => [
      ...currentCourses,
      { text: courseTitle, id: Math.random().toString() },
    ]);
    endModal();
  };

  return (
    <>
    <StatusBar style="light" />
    <View style={styles.container}>
        <Button title = 'Kurs Ekle' color="darkcyan" onPress={startModal}/>
        <CourseInput 
        visible = {modalIsVisible} 
        onAddCourse={addCourse}
        onCancel={endModal}
        />
        <View>
          <FlatList
          data={courses} /* Kurs listesi state'ini data prop'una geçir */
          renderItem={({item}) => ( 
            <View style = {styles.courseItem}>
              <Text style = {styles.courseText}>{item.text}</Text>
            </View>
          )}
          />
        </View>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
    paddingHorizontal: 25
  },
  courseItem:{
    backgroundColor: '#688f9f',
    margin: 8,
    borderRadius: 5
  },
  courseText:{
    padding:10,
    color: 'white'
  }
});
