import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity,
     KeyboardAvoidingView, ImageBackground } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

function Login({ navigation }) {
  return (
    <KeyboardAvoidingView
  behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
  style={styles.container}
>
  <View>
  <ImageBackground source={require('../../assets/components/Login/img/background.jpg')} style={styles.background}>
        <Text style={styles.title}>LOGIN</Text>
        <View style={{marginTop:40}}>
          <View style={styles.iconinput}>
            <Icon name="user-circle" size={30} color="darkblue" />
            <TextInput style={styles.input} placeholder=" Username or Email" />
          </View>
         
          <View style={styles.iconinput}>
            <Icon name="key" size={30} color="darkblue" />
            <TextInput style={styles.input} placeholder=" Password" />
          </View>
          <Text style={{ alignSelf: 'flex-end', color: 'darkblue' }}>Forgot your password ?</Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
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
