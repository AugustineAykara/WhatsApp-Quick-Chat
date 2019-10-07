
import React, { Component } from 'react';
import { View, StyleSheet, Text, Linking, TextInput, BackHandler, StatusBar, TouchableOpacity } from 'react-native';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mobile : '',
      countryCode : '+91',
    };      
  }

  
  render() {
    return (

      <View style={styles.container}>

        <StatusBar
          backgroundColor = "green"
          animated = {true}
        />

        <View style={styles.headerBar}>
          <Text style={styles.headerText}>WhatsApp Quick Chat</Text>
        </View>

        <View style={styles.boxContainer}>
          <View style={styles.box}>
   
            <View style={styles.boxHeader}>
              <Text style={styles.boxHeaderText}>{this.state.countryCode} {this.state.mobile}</Text>
            </View>

            <View style={styles.boxInside}>
              <View style={styles.note}>
                <Text style={styles.message}>
                  Chat with someone without having their phone number saved in your phone's address book.
                </Text>
              </View>
              
              <View style={styles.boxInput}>
                <TextInput style={styles.countryCodeInput}
                  value={this.state.countryCode}
                  onChangeText={countryCode => this.setState({ countryCode})}
                  keyboardType={'numeric'}
                />
                <TextInput style={styles.mobileNumberInput}
                  value={this.state.mobile}
                  onChangeText={mobile => this.setState({ mobile})}
                  placeholder={'Enter Phone Number'}
                  keyboardType={'numeric'}
                />
              </View>
              
              <View style={styles.boxButton}>
                <View style={styles.button}>
                  <TouchableOpacity style={styles.textButton}
                    onPress={() => BackHandler.exitApp()}
                  >
                    <Text style={{color : 'black', fontSize : 16}}> CLOSE </Text>
                  </TouchableOpacity>
                </View>
                
                <View style={styles.button}>                  
                  <TouchableOpacity style={styles.textButton}
                     onPress = { () => Linking.openURL('http://api.whatsapp.com/send?phone=' + this.state.countryCode + this.state.mobile) }
                  >
                    <Text style={{color : 'black', fontSize : 16}}> VIEW </Text>
                  </TouchableOpacity>
                </View>
              </View>

            </View>

          </View>
        </View>
      </View>
    );
  }
}
 
const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#237067',
   },
   headerBar : {
    justifyContent: 'center',
    backgroundColor : '#075E55',
    height : 56,
   }, 
   headerText : {
    color : 'white',
    marginLeft : 16,
    fontSize : 19
   },
 
  boxContainer : {
    flex : 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box : {
    marginLeft : 14,
    marginRight : 14,
    justifyContent : 'center',
  },
  boxHeader :{
    padding : 8,
    backgroundColor : '#075E54',
    height : 56,
    justifyContent : 'center',
  },
  boxHeaderText : {
    color : 'white',
    fontSize : 19,
  },
  boxInside : {
    backgroundColor: '#F1EFF0',
  },
  message : {
    textAlign : 'center',
    color : 'black',
    fontSize : 16,
    margin : 18,
  },
  boxInput : {
    flexDirection : 'row',
    backgroundColor : 'white',
    margin : 8,
    borderRadius : 24,
  },
  countryCodeInput : {
    fontSize : 19,
    paddingLeft : 8,
    paddingRight : 8,
    borderRightWidth : 1,
    backgroundColor : '#F7F7F7',
    borderTopLeftRadius: 24,
    borderBottomLeftRadius : 24,

  },
  mobileNumberInput : {
    fontSize : 19,
    paddingLeft : 8,
    paddingRight : 8,
  },
  boxButton : { 
    flexDirection: 'row', 
  },
  button : {
    flex: 1,
    borderWidth : 0.5,
    borderColor : 'lightgrey',
  },
  textButton : {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F1EFF0',
    height : 58,
    fontSize : 16,
  },

});