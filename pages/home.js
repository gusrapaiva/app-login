import { Text, View, StyleSheet, Image, ScrollView} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      <Text style={styles.titulo}>
        
        Pizzaria do Paraíba
      </Text>  

      <ScrollView>

      <Text style={styles.subtitulo}>Cárdapio</Text>

      <View style={styles.cxpizza}>
      
      <Text style={styles.subtitulo}>
        Pizza de Mussarala
      </Text>
      <Text style={styles.preco}> R$40,00 </Text>

      <Image style={styles.img} resizeMode="stretch" source={require("../assets/mussarela.jpg")}/>

      <View style={styles.comprar}>
        <Text style={styles.comprartxt}> Comprar </Text>
      </View>

      </View>

      <View style={styles.cxpizza}>

      <Text style={styles.subtitulo}>Pizza de Peperoni</Text>
      <Text style={styles.preco}> R$46,00 </Text>
      <Image style={styles.img} resizeMode="stretch" source={require("../assets/peperoni.jpg")}/>

      <View style={styles.comprar}>
        <Text style={styles.comprartxt}> Comprar </Text>
      </View>
      </View>

      <View style={styles.cxpizza}>

      <Text style={styles.subtitulo}>Pizza de Frango</Text>
      <Text style={styles.preco}> R$45,00 </Text>
      <Image style={styles.img} resizeMode="stretch" source={require("../assets/pizzafrango.jpg")}/>

      <View style={styles.comprar}>
        <Text style={styles.comprartxt}> Comprar </Text>
      </View>

      </View>

      

      </ScrollView>

    </View>

    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#e3b212',
    padding: 8,
  },
  titulo: {
    margin: 24,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    textDecorationLine: 'underline'
  },
  subtitulo :{
    margin: 20,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    textDecorationLine: 'underline'
    },
  img: {
    width: 282,
    height: 350,
    justifyContent: 'center',
    borderRadius: 5,
    marginBottom: 10,
  },
  // icon: {
  //   width: 50,
  //   height: 50
  // },
  preco: {
    fontSize: 30,
    textAlign: 'center',
    color: '#fff',
    marginTop: 10,
    marginBottom: 10,
    fontWeight: '500',
    textDecorationLine:'underline'
  },
  cxpizza: {
    flex: 1,
    backgroundColor: '#9c371e',
    alignItems: 'center',
    margin: 15,
    borderRadius: 10,
  },
  comprar:{
    backgroundColor: '#64d660',
    borderColor: '#000',
    borderRadius: 10,
    marginBottom: 15
  },
  comprartxt: {
    fontSize: 25,
    fontWeight: '500',

  }
});
