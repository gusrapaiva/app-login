import React, {useState, useEffect} from 'react';

import{
  Text, SafeAreaView, StyleSheet, Image, TextInput, TouchableOpacity
} from 'react-native';

import Firebase from '../firebase';

export default function App({navigation}) {


  const[email, setEmail] = useState('');
  const[senha, setSenha] = useState('');

  function checkLogin()
  {

  Firebase.auth().signInWithEmailAndPassword(email, senha).catch(function (error){
    var errorCode = error.code;
    var errorMessage = error.message;
    alert(errorCode, errorMessage);
  })
  }

  useEffect(() => {
    Firebase.auth().onAuthStateChanged(function(user){
      if(user){
        // alert("ok");
        navigation.navigate("home");
      }else{
        console.log('não tá legal');
      }
    });
  },)

//   .then((userCredential) => {
//     // Signed in 
//     const user = userCredential.user;
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//   });
    
//   }

//   onAuthStateChanged(auth, (user) => {
//   if (user) {
//     // User is signed in, see docs for a list of available properties
//     // https://firebase.google.com/docs/reference/js/auth.user
//     const uid = user.uid;
//     // ...
//   } else {
//     // User is signed out
//     // ...
//   }
// });

  return(
    <SafeAreaView style={estilos.container}>

    <Image style={estilos.imagem} source={require('../assets/pizza.png')} />

    <Text style={estilos.titulo}> Pizzaria do Paraíba </Text>

    <TextInput 
      placeholderTextColor={'#fff'} 
      style={estilos.textoinput} 
      placeholder="Digite o email" 
      onChangeText={(email) => setEmail(email)} value={email} 
    />

    <TextInput 
      placeholderTextColor={'#fff'} 
      style={estilos.textoinput} 
      placeholder="Digite a senha" 
      onChangeText={(senha) => setSenha(senha)} value={senha} 
    />

  <TouchableOpacity 
    style={estilos.btn}
    onPress={() => {
      checkLogin();
    }}>
    <Text> Acessar </Text>
  </TouchableOpacity>  


    </SafeAreaView>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    alignItems: 'center'
  },
  titulo: {
    fontSize: 30
  },
  textoinput: {
    width: 250,
    backgroundColor: '#000',
    color: '#fff',
    borderRadius: 20,
    height: 60,
    margin: 10,
    textAlign: 'center',
    fontSize: 20

  },
  imagem: {
    width: 200,
    height: 200
  },
  btn: {
    fontSize: 20,
    padding: 20,
    backgroundColor: '#696969',
    color: '#fff',
    borderRadius: 10
  }
});

