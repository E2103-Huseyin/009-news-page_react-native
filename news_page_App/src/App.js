import React from 'react';
import {ImageBackground,
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
} from 'react-native';


const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <ImageBackground source={require('C:/Users/Pc/Desktop/CLARUSWAY/FULLTSACK/C_WAY/CW_proje/react-native/projects/009-news-page/009-news-page_react-native/news_page_App/src/Image3.jpg')} style={styles.image}>
          <Text style={styles.text}>COVID-19 vaccine won't immediately end the pandemic, experts say</Text>
        </ImageBackground>
      </View>
      <View style={{flex: 1.2}}>
        <ImageBackground source={require('C:/Users/Pc/Desktop/CLARUSWAY/FULLTSACK/C_WAY/CW_proje/react-native/projects/009-news-page/009-news-page_react-native/news_page_App/src/Imge5.png')} style={styles.image2}>
          <Text style={styles.text2}>finance</Text>
        </ImageBackground>
      </View>
      <View style={{flex: 2, flexDirection: "row", borderTopWidth: 5}} >
        <View style={{flex: 3 ,backgroundColor:'#babdbe'}}>
          <Text style={styles.text2}>ITALY COUNTDOWN – RALLY ROUTE</Text>
          <Text style={styles.text3}>Rally Italia Sardegna (8 - 11 October) follows a traditional WRC schedule after short format rounds in Estonia and Turkey which restarted the FIA World Rally Championship following lockdown.</Text>
        </View>
        <View style={{flex: 1}}>
          <ImageBackground source={require('C:/Users/Pc/Desktop/CLARUSWAY/FULLTSACK/C_WAY/CW_proje/react-native/projects/009-news-page/009-news-page_react-native/news_page_App/src/Image6.jpg')} style={styles.image}>
            <Text>_</Text>
          </ImageBackground>
        </View>
      </View>
      <View style={{flex: 0.5, alignItems: 'center', justifyContent: 'center', borderTopWidth:3}}>
        <Text style={{ color:'red', fontSize: 25, textAlign:"center" }}>'Yes, Science Is Political'</Text>
      </View>
      <View style={{ flex: 3, flexDirection:'row'}}>
        <View style={{flex: 0.8,backgroundColor:'#eceff1'}}>
          <Text style={{ color:'#111', fontSize: 18, textAlign:"center" }}>Scientists need to acknowledge that fact—and to act on it in these most dire of times</Text>
        </View>
        <View style={{flex: 3, alignItems: "center",}}>
          <Image source={require('C:/Users/Pc/Desktop/CLARUSWAY/FULLTSACK/C_WAY/CW_proje/react-native/projects/009-news-page/009-news-page_react-native/news_page_App/src/Image7.jpg')} style={styles.image3}></Image>
        </View>
      </View>
      <View style={{backgroundColor: '#357' , flex: 0.5, alignItems:'center',justifyContent: 'center'}}>
        <Text>news.com</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 2,
    borderBottomWidth: 5,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    opacity:0.9,
  },
  image2: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-start",
    opacity:0.9,
  },
  image3: {
    flex: 5,
    resizeMode: 'contain',
    justifyContent: 'center',
    
  },

  text: {
    color: "#fff",
    // alignItems: 'center',
    // justifyContent: 'center',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: "bold",
    backgroundColor: 'rgba(0,0,0,0.7)',
  },
  text2: {
    color: "#fff",
    // alignItems: 'center',
    justifyContent: 'flex-start',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: "bold",
    backgroundColor: 'rgba(0,0,0,0.5)',
    
  },
  text3: {
    color: "#000",
    alignItems: 'center',
    padding:5,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: "bold",
    
    
  }
});

export default App;
