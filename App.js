import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';

class Greeting extends Component {
  render() {
    return (
      <View style={{alignItems: 'center', marginTop: 50}}>
        <Text>Hello {this.props.name}!</Text>
      </View>
    );
  }
}

export default class LotsOfGreetings extends Component {
  render() {
    return (
      /* <View>
        <Greeting name='Rexxar' />
        <Greeting name='Jaina' />
        <Greeting name='Valeera' />
        <Text style={styles.bigBlue}>This is bigBlue.</Text>
        <Text style={[styles.bigBlue, styles.red]}>This is red.</Text>
        <View style={{width: 10, height: 10, backgroundColor: 'powderblue'}}/>
        <View style={{width: 20, height: 20, backgroundColor: 'skyblue'}}/>
        <View style={{width: 40, height: 40, backgroundColor: 'steelblue'}}/>
      </View> */

      /* <View style={{height: 300}}>
        <View style={{flex: 1, backgroundColor: 'powderblue'}}/>
        <View style={{flex: 2, backgroundColor: 'skyblue'}}/>
        <View style={{flex: 3, backgroundColor: 'steelblue'}}/>
      </View> */

      <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch'
        }}>
        <View style={{width: 20, height: 20, backgroundColor: 'powderblue'}}/>
        <View style={{height: 20, backgroundColor: 'skyblue'}}/>
        <View style={{height: 20, backgroundColor: 'steelblue'}}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30
  },
  red: {
    color: 'red'
  }
  });
