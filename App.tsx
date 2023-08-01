/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import coffee from './assets/images/coffee.png'
import cup from './assets/images/cup.png'
import glass from './assets/images/glass.png'
import milk from './assets/images/milk.png'

// import question from './assets/Data/oneQuestionWithOption'
import React from 'react';
import type { PropsWithChildren } from 'react';
import {
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

function App(): JSX.Element {

  const ImageOption = (props:any) => {
    return (
      <Pressable onPress={()=>{
        console.warn(props.text);
        
      }}
      style={style.box} >
        <Image source={props.img} style={style.img} />
        <Text style={{ fontSize: 25, fontWeight:'bold', color:'black'}}>{props.text}</Text>
      </Pressable>
    )
  }

  return (
    <>
      <SafeAreaView style={style.container}>

        <View style={style.header}>
          <Text style={style.text}>Which of these is "the glass"?</Text>
        </View>

        <View style={style.imgContainer}>           
           <ImageOption img={cup} text='Cup'/>
           <ImageOption img={coffee} text='Coffee'/>
           <ImageOption img={glass} text='Glass'/>
           <ImageOption img={milk} text='Milk'/>
        </View>

      </SafeAreaView>      
    </>
  );
}
const style = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    width: '100%',
    height: '15%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  imgContainer: {
    width: '100%',
    height: '85%',
    padding: 5,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  box: {
    width: '50%',
    height: '50%',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: 'red',
  },

  text: {
    fontSize: 25,
    color: 'black',
    fontWeight: 'bold',
  },
  img: {
    width: '80%',
    height: '70%',
    resizeMode: 'contain'

  }
})

export default App;
