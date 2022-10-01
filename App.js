
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, SafeAreaView, ScrollView, Alert } from 'react-native';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import {Picker} from '@react-native-picker/picker';
import { useState } from 'react'
import DropDownPicker from 'react-native-dropdown-picker';
import {useCallback} from 'react'
import styles from './Styles';

export default function App() {
  const [weight, setWeight] = useState(0)
  const [bottles, setBottles] = useState(0)
  const [gender, setGender] = useState('Male')
  const [time, setTime] = useState(0)
  const [gramsLeft, setGramsLeft] = useState('0')
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [value, setValue] = useState(null);
  const [result2, setResult2] = useState('');
  const [textColor, setTextColor] = useState('green')

  const onOpen = useCallback(() =>{
    setOpen2(false);
  }, []);

  const bottleslist = [
    {label: '1', value: 1},
    {label: '2', value: 2},
    {label: '3', value: 3},
    {label: '4', value: 4},
    {label: '5', value: 5},
    {label: '6', value: 6},
    {label: '7', value: 7},
    {label: '8', value: 8},
    {label: '9', value: 9},
    {label: '10', value: 10},
    {label: '11', value: 11}
  ];

  const timeList = [
    {label: '1', value: 1},
    {label: '2', value: 2},
    {label: '3', value: 3},
    {label: '4', value: 4},
    {label: '5', value: 5},
    {label: '6', value: 6}
  ]
  const genders = [
    {label: 'Male', value: 'Male'},
    {label: 'Female', value: 'Female'}
  ]


  const showAlert = () =>
  Alert.alert(
    'Alcohol level too low!!',
    'Drink more',
  );

  const showAlert2 = () =>
  Alert.alert(result2);

  const calculate = () => {
    let result = '0'
    if (weight == 0){
      result = 'Gimme weight'
      setResult2(result);
      console.log(result2)
      showAlert2(result2);
      setGramsLeft(result)
    }else {
      if (gender === 'Male'){
        result = ((bottles*0.33 * 8 * 4.5 - ((weight/10)*time) ) /(weight* 0.7))
        if (result < 0){result = showAlert}
         
        else if(result < 0.5 && result >0){
          setTextColor('green') }
        else if(result > 0.5 && result < 1.2){setTextColor('yellow') } 
        else { setTextColor('red') }
          
          setGramsLeft(result.toFixed(2))
      }else{
        result = ((bottles*0.33 * 8 * 4.5 - ((weight/10)*time) ) /(weight* 0.6))
        if (result < 0){result = showAlert
          setGramsLeft(result)} else{
            setGramsLeft(result.toFixed(2))
          }
          
          }
                        
    }     
}
  
if(textColor==="green"){
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
    <View style={styles.container}>
      <Text style={styles.otsikko}>Alkometeeer</Text>
      <Text style={styles.dataentry}> enter weight</Text>
      <TextInput style={styles.weightbox} placeholder="enter weight" value={weight} onChangeText={text => setWeight(text)} keyboardType='number-pad'/>
      <Text style={styles.dataentry}>Bottles</Text>
      
      <DropDownPicker
      style={styles.dropdown}
      zIndex={3000}
      zIndexInverse={1000}
      open={open}
      onOpen={onOpen}
      value={bottles}
      placeholder="Select bottles count"
      items={bottleslist}
      setOpen={setOpen}
      setValue={setBottles}
      dropDownDirection="BOTTOM"
      />

      <Text style={styles.dataentry}>Time</Text>
      
      <DropDownPicker
      style={styles.dropdown}
      zIndex={2000}
      zIndexInverse={2000}
      open={open2}
      placeholder="Select time since drinking"
      value={time}
      items={timeList}
      setOpen={setOpen2}
      setValue={setTime}
      />
      

      <RadioForm
      style={styles.radio}
      buttonSize={10}
      radio_props={genders}
      initial={0}
      onPress={(value) => setGender(value)}
      />
      <Text style={styles.green}>{gramsLeft}</Text>
      <View style={styles.calculate}>
      <Button color='black'  title = "Calculate" onPress={calculate}/></View>
      <StatusBar style="auto" />
    </View>
    </ScrollView>
    </SafeAreaView>
  );
}
if(textColor==="yellow"){
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
    <View style={styles.container}>
      <Text style={styles.otsikko}>Alkometeeer</Text>
      <Text style={styles.dataentry}> enter weight</Text>
      <TextInput style={styles.weightbox} placeholder="enter weight" value={weight} onChangeText={text => setWeight(text)} keyboardType='number-pad'/>
      <Text style={styles.dataentry}>Bottles</Text>
      
      <DropDownPicker
      style={styles.dropdown}
      zIndex={3000}
      zIndexInverse={1000}
      open={open}
      onOpen={onOpen}
      value={bottles}
      placeholder="Select bottles count"
      items={bottleslist}
      setOpen={setOpen}
      setValue={setBottles}
      dropDownDirection="BOTTOM"
      />

      <Text style={styles.dataentry}>Time</Text>
      
      <DropDownPicker
      style={styles.dropdown}
      zIndex={2000}
      zIndexInverse={2000}
      open={open2}
      placeholder="Select time since drinking"
      value={time}
      items={timeList}
      setOpen={setOpen2}
      setValue={setTime}
      />
      

      <RadioForm
      style={styles.radio}
      buttonSize={10}
      radio_props={genders}
      initial={0}
      onPress={(value) => setGender(value)}
      />
      <Text style={styles.yellow}>{gramsLeft}</Text>
      <View style={styles.calculate}>
      <Button color='black'  title = "Calculate" onPress={calculate}/></View>
      <StatusBar style="auto" />
    </View>
    </ScrollView>
    </SafeAreaView>
  );
}
if(textColor==="red"){
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
    <View style={styles.container}>
      <Text style={styles.otsikko}>Alkometeeer</Text>
      <Text style={styles.dataentry}> enter weight</Text>
      <TextInput style={styles.weightbox} placeholder="enter weight" value={weight} onChangeText={text => setWeight(text)} keyboardType='number-pad'/>
      <Text style={styles.dataentry}>Bottles</Text>
      
      <DropDownPicker
      style={styles.dropdown}
      zIndex={3000}
      zIndexInverse={1000}
      open={open}
      onOpen={onOpen}
      value={bottles}
      placeholder="Select bottles count"
      items={bottleslist}
      setOpen={setOpen}
      setValue={setBottles}
      dropDownDirection="BOTTOM"
      />

      <Text style={styles.dataentry}>Time</Text>
      
      <DropDownPicker
      style={styles.dropdown}
      zIndex={2000}
      zIndexInverse={2000}
      open={open2}
      placeholder="Select time since drinking"
      value={time}
      items={timeList}
      setOpen={setOpen2}
      setValue={setTime}
      />
      

      <RadioForm
      style={styles.radio}
      buttonSize={10}
      radio_props={genders}
      initial={0}
      onPress={(value) => setGender(value)}
      />
      <Text style={styles.red}>{gramsLeft}</Text>
      <View style={styles.calculate}>
      <Button color='black'  title = "Calculate" onPress={calculate}/></View>
      <StatusBar style="auto" />
    </View>
    </ScrollView>
    </SafeAreaView>
  );
}
}






