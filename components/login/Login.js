import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity,
     KeyboardAvoidingView, ImageBackground , Alert} from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';

function Login({ navigation }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const LoginFunction = async () => {
    const listAccount = await AsyncStorage.getItem("user");
    if (listAccount) {
      const parseAccounts = JSON.parse(listAccount);
      var flag = parseAccounts.find(
        (account) =>
          account.username == username && account.password == password
      );
      if (flag) {
        Alert.alert("Message", "Logged in successfully!");

        navigation.navigate("Home");
      } else {
        Alert.alert("Error", "Account or password is incorrect!");
        return;
      }
    }
  };

  
  return (
    <KeyboardAvoidingView
  behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
  style={styles.container}
>
  <View>
  <ImageBackground source={require('../../assets/components/Login/img/background.jpg')} style={styles.background}>
        <Text style={styles.title}>LOG IN</Text>
        <View style={{marginTop:40}}>
          <View style={styles.iconinput}>
            <Icon name="user-circle" size={30} color="darkblue" />
            <TextInput style={styles.input} placeholder=" Username or Email" onChangeText={(e) => setUsername(e)}/>
          </View>
         
          <View style={styles.iconinput}>
            <Icon name="key" size={30} color="darkblue" />
            <TextInput style={styles.input} placeholder=" Password" onChangeText={(e) => setPassword(e)}/>
          </View>
          <Text style={{ alignSelf: 'flex-end', color: 'darkblue' }}>Forgot your password ?</Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={() => LoginFunction()}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <View style={styles.rowContainer}>
          <Text style={{ alignSelf: 'flex-end', color: 'darkblue' }}>You don't have an account ? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={{ textAlign: 'center', color: 'blueviolet' }}> Register</Text>
          </TouchableOpacity>
        </View>
        <StatusBar style="auto" />
      </ImageBackground>
  </View>
</KeyboardAvoidingView>

  
  );
}

const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  iconinput:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor:'black',
    borderBottomWidth:0.3,
    marginBottom: 10,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'darkblue',
 
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    width: 300,
  
    backgroundColor: 'aliceblue',
    borderRadius: 25,
    
    paddingHorizontal: 10,
   
  },
  button: {
    backgroundColor: '#3399FF',
    padding: 10,
    marginTop: 30,
    borderRadius: 25,
  },
  buttonText: {
    width: 300,
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
   
  },
  background: {
    flex: 1,

    backgroundColor: 'white',
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
    width:420
  },
});

export default Login;
