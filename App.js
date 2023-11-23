import React , {useState} from 'react';
import {SafeAreaView, StyleSheet, TextInput, Text, Button} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const storeData = async (value) => {
  
  {/*try {
  //  await AsyncStorage.setItem('keyB', value);
  //} catch (e) {
    // saving error
  }*/}
  
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem('@my-key', jsonValue);
  } catch (e) {
    console.log('Failed to store the data');
  }

};

const main = () => {
  const [text, setText] = useState('');
  const [textt, onChangeText] = React.useState('Useless Text');
  const [number, onChangeNumber] = React.useState('');

  const saveData = async () => {
    try {
      await storeData(2);
      console.log('Data saved successfully');
      console.log(text);
    } catch (e) {
      console.log('Failed to save the data');
      
    }
  };

  const getData = async () => {
    {/** try {
      const value = await AsyncStorage.getItem('keyB');
      if (value !== null) {
        console.log('Data read successfully: ', value);
      }
    } catch (e) {
      console.log('Failed to read the data');
    }
    */}

    try {
      const jsonValue = await AsyncStorage.getItem('@my-key');
      const value = jsonValue != null ? JSON.parse(jsonValue) : null;

      if (value !== null) {
        console.log(value);
      }
    } catch (e) {
      console.log('Failed to get the data');
    }
 };


  return (
    <SafeAreaView>
      <Text> Username</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        onChangeText={newText => setText(newText)}
        defaultValue={text}
      />
    
      <Text>Password</Text>
      <TextInput
        style={styles.input}
      />

      <Text>First Name</Text>
      <TextInput
        style={styles.input}
      />

      <Text>Last Name</Text>
      <TextInput
        style={styles.input}
      />
    
      <Button title="Add data" onPress={saveData}/>
      <Button title="View"/>
    </SafeAreaView>
    
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default main;