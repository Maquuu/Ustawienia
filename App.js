import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, Image,TouchableOpacity } from 'react-native';

export default function App() {
  return (
   <SafeAreaView>
    <View style={{height: '100%'}}>
        <View>
          <TouchableOpacity><Image style={styles.left} source={require('./assets/chevron-left.png')} /></TouchableOpacity>
          <View style={styles.mini_logo}>
          <Image style={styles.mini_logo} source={require('./assets/logo.png')} />
          <Text style={styles.middle_text}>{"Ustawienia"}</Text>
          </View>
        </View>
        {/*srodek layoutu*/}
        <View style={styles.space}>
            <TouchableOpacity ><Text style={styles.srodek}>{"Zmień hasło"}</Text></TouchableOpacity>
            <TouchableOpacity ><Text style={styles.srodek}>{"Prywatność"}</Text></TouchableOpacity>
            <TouchableOpacity ><Text style={styles.srodek}>{"Regulamin aplikacji"}</Text></TouchableOpacity>
            <TouchableOpacity ><Text style={styles.srodek}>{"Dostosuj wygląd"}</Text></TouchableOpacity>
            <TouchableOpacity><Text style={styles.srodek}>{"Język aplikacji"}</Text></TouchableOpacity>

        </View>
      <Image source={require('./assets/paws.png')} style={styles.paws}/>
    </View>
      
   </SafeAreaView>
     
  );
}

const styles = StyleSheet.create({
  left: {
    width: 45,
    height: 45,
    marginTop: 45,
    marginLeft: 8,
    position: 'absolute',
  },
mini_logo: {
    alignItems: 'center',
    justifyContent: 'center',
    //position: 'absolute',
    marginTop: 10,
  },
middle_text: {
  fontWeight:'bold',
  margin: 30,
  fontSize: 40,
},
srodek:{
  margin: 7,
fontWeight: 'bold',
  marginLeft: 30,
  fontSize: 18,
},
space:{
  marginTop: 40,
},
paws:{
  position:'absolute',
  bottom: 0,
  
}

});
