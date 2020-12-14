import React, { useState } from 'react';
import { Dimensions, TouchableHighlight } from 'react-native';
import { Button, View, Text, StyleSheet, StatusBar, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function HomeScreen({ navigation }) {
  return (
      <View style={styles.container}>
          <Text style={textStyle.container}>Hello,{"\n"}React Native!</Text>
          <StatusBar style="auto" />

          <View style={{position:'absolute',bottom:10,alignSelf:'flex-end', right:10,}}>
              <Button style={{ borderRadius: 8}}
                      title="PRÓXIMO"
                      onPress={() => navigation.navigate('page_2')}/>
          </View>


      </View>


  );
}

function Page_2({ navigation }) {

  return (

      <View style={{ flex: 1,
          backgroundColor: '#fff',
          alignItems: 'stretch',
          justifyContent: 'center',}}>
          <Text style={{fontSize: 40}}>Quantos passos para{"\n"}aprender React{"\n"}Native?</Text>
          <StatusBar style="auto" />


          <TextInput
              style={{ height: 40, borderWidth: 1, width: 400, fontSize: 30, left: 5, borderRadius: 10}}
              placeholder=" 2"
              >
          </TextInput>
          <Text style={{fontSize: 40}}>{"\n"}Quantos tópicos em{"\n"}cada passo?</Text>

          <TextInput
              style={{ height: 40, borderWidth: 1, width: 400, fontSize: 30, left: 5, borderRadius: 10}}
              placeholder=" 2"
          >
          </TextInput>
          <View style={{position:'absolute',bottom:10,alignSelf:'flex-end', right:10,}}>
              <Button style={{ borderRadius: 8}}
                      title="PRÓXIMO"
                      onPress={() => navigation.navigate('page_3')}/>
          </View>


      </View>
  );
}

function Page_3({ navigation }) {

    return (

        <View style={{ flex: 1,
            backgroundColor: '#fff',
            alignItems: 'stretch',
            justifyContent: 'center',}}>

            <TouchableHighlight
                style = {{ left: 100,
                    borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
                    width: Dimensions.get('window').width * 0.5,
                    height: Dimensions.get('window').width * 0.5,
                    backgroundColor:'yellow',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
                underlayColor = '#ccc'

            >
                <Text style={{fontSize: 40}}> 1 </Text>
            </TouchableHighlight>


            <Text style={{fontSize: 40}}>Passo 1</Text>
            <StatusBar style="auto" />


            <TextInput
                style={{ height: 40, borderWidth: 1, width: 400, fontSize: 30, left: 5, borderRadius: 10}}

            >
            </TextInput>
            <Text >{"\n"}</Text>
            <TextInput
                style={{ height: 40, borderWidth: 1, width: 400, fontSize: 30, left: 5, borderRadius: 10}}

            >
            </TextInput>
            <View style={{position:'absolute',bottom:10,alignSelf:'flex-end', right:10,}}>
                <Button style={{borderRadius: 8 }}
                        title="PRÓXIMO"
                        onPress={() => navigation.navigate('page_4')}/>
            </View>


        </View>
    );
}

function Page_4({ navigation }) {

    return (

        <View style={{ flex: 1,
            backgroundColor: '#fff',
            alignItems: 'stretch',
            justifyContent: 'center',}}>
            <TouchableHighlight
                style = {{ left: 100,
                    borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
                    width: Dimensions.get('window').width * 0.5,
                    height: Dimensions.get('window').width * 0.5,
                    backgroundColor:'yellow',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
                underlayColor = '#ccc'

            >
                <Text style={{fontSize: 40}}> 2 </Text>
            </TouchableHighlight>

            <Text style={{fontSize: 40}}>Passo 2</Text>
            <StatusBar style="auto" />


            <TextInput
                style={{ height: 40, borderWidth: 1, width: 400, fontSize: 30, left: 5, borderRadius: 10}}

            >
            </TextInput>
            <Text >{"\n"}</Text>
            <TextInput
                style={{ height: 40, borderWidth: 1, width: 400, fontSize: 30, left: 5, borderRadius: 10}}

            >
            </TextInput>
            <View style={{flexDirection:"row", position:'absolute',bottom:10,alignSelf:'flex-end', right:2, alignItems: 'stretch'}}>
                <Button style={{borderRadius: 8 }}
                        title="VOLTAR"
                        onPress={() => navigation.navigate('page_3')}/>


                <Button style={{borderRadius: 8}}
                        title="PRÓXIMO"
                        onPress={() => navigation.navigate('page_4')}/>

            </View>


        </View>
    );
}




const Stack = createStackNavigator();

function App() {
    const [text, setText] = useState('');
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="page_2" component={Page_2} />
          <Stack.Screen name="page_3" component={Page_3} />
          <Stack.Screen name="page_4" component={Page_4} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',

    },
});

const textStyle = StyleSheet.create({
    container: {
        fontSize: 50
    },
});
export default App;
