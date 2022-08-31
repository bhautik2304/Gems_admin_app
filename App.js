import React from 'react';
import {View as Bhautik, StyleSheet,Image,Text, Button} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { WebView } from 'react-native-webview';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <>
    <NavigationContainer>
    <Stack.Navigator screenOptions={{
    headerShown: false
  }}>
    <Stack.Screen name="Home" component={SplashScreen} />
    <Stack.Screen name="Admin" component={Admin} />
    </Stack.Navigator>
    </NavigationContainer>
      {/* 
      screenOptions={{
    headerShown: false
  }}
       */}
    </>
  );
}

const Admin = ({ navigation }) => {
  return (
    <>
      <WebView source={{ uri: 'https://gocoolgroup.com/crmportal/' }} />
    </>
  );
}

const SplashScreen = ({ navigation }) => {
  return (
    <Bhautik style={styles.splashScreen}>
      <Image source={require('./assets/logo.png')} height='100%' />
      <Bhautik style={{alignItems:'center'}}>
      <Bhautik style={{marginVertical:50,width:150}}>
      <Button title='Login' onPress={()=>navigation.navigate('Admin')}/>
      </Bhautik>
      </Bhautik>
    </Bhautik>
  );
}

const styles = StyleSheet.create({
  splashScreen:{
    height: "100%",
    backgroundColor: "#f1f1f1",
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fontstyle:{
    fontSize: 15,
    fontWeight: '700',
    color:"black",
    fontFamily: 'merriweather',

  },
  btn:{
    margin: 10,
  }
})



export default App;
