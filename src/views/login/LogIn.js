import React, { Component, useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";

const login = ({navigation}) => {
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [errorText,setErrorText] = useState("");
const [loading, setLoading] = useState(false);

const handleSubmit = () => {
setErrorText('');
if(!email){
  alert('Please Fill Email');
  return;
}
if(!password){
  alert('Please Fill Password');
  return;
}
setLoading(true);
let dataToSend = {email: email, password: password};
console.log(dataToSend);
navigation.navigate("shoppingList")
}

const handleGuestSubmit = () => {
  navigation.navigate("shoppingList");
}
return (
  
  <View style={styles.container}>
    
    {/* <Image style={styles.image} source={require("./src/assets/cart.png")} /> */}

    {/* <StatusBar style="auto" /> */}
    <View style={styles.inputView}>
      <TextInput
        style={styles.TextInput}
        placeholder="Username"
        placeholderTextColor="#000000"
        onChangeText={(email) => setEmail(email)}
      />
    </View>

    <View style={styles.inputView}>
      <TextInput
        style={styles.TextInput}
        placeholder="Password"
        placeholderTextColor="#000000"
        secureTextEntry={true}
        onChangeText={(password) => setPassword(password)}
      />
    </View>
<View style={{flexDirection:'row'}}>
<TouchableOpacity>
      <Text style={styles.loginText} onPress={handleSubmit}>Sign Up    </Text>
    </TouchableOpacity>
    <TouchableOpacity>
      <Text style={styles.forgot_button} onPress={handleGuestSubmit}>Login as a guest    </Text>
    </TouchableOpacity>

   
    </View>
  </View>
);
}

const styles = StyleSheet.create({
container: {
  flex: 1,
  backgroundColor: "#fff",
  alignItems: "center",
  justifyContent: "center",
},

image: {
  marginBottom: 10,

},

inputView: {
  backgroundColor: "#e6e6e6",
  // borderRadius: 30,
  width: "70%",
  height: 45,
  marginBottom: 20,
  alignItems: "center",
},

TextInput: {
  height: 50,
  flex: 1,
  padding: 10,
  marginLeft: 20,
},

forgot_button: {
  height: 30,
  marginBottom: 30,
},

// loginBtn: {
//   width: "80%",
//   borderRadius: 25,
//   height: 50,
//   alignItems: "center",
//   justifyContent: "center",
//   marginTop: 40,
//   backgroundColor: "#FF1493",
// },
});

export default login;