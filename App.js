import React, { Component } from 'react';
import { AppRegistry, Alert, Platform, StyleSheet, SectionList, Text, TextInput, Button, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback, View } from 'react-native';

class Greeting extends Component {
  render() {
    return (
      <View style={{alignItems: 'center', marginTop: 50}}>
        <Text>Hello {this.props.name}!</Text>
      </View>
    );
  }
}

/*export default class LotsOfGreetings extends Component {
  render() {
    return (
      /!* <View>
        <Greeting name='Rexxar' />
        <Greeting name='Jaina' />
        <Greeting name='Valeera' />
        <Text style={styles.bigBlue}>This is bigBlue.</Text>
        <Text style={[styles.bigBlue, styles.red]}>This is red.</Text>
        <View style={{width: 10, height: 10, backgroundColor: 'powderblue'}}/>
        <View style={{width: 20, height: 20, backgroundColor: 'skyblue'}}/>
        <View style={{width: 40, height: 40, backgroundColor: 'steelblue'}}/>
      </View> *!/

      /!* <View style={{height: 300}}>
        <View style={{flex: 1, backgroundColor: 'powderblue'}}/>
        <View style={{flex: 2, backgroundColor: 'skyblue'}}/>
        <View style={{flex: 3, backgroundColor: 'steelblue'}}/>
      </View> *!/

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
}*/

/*export default class PizzsTranslator extends Component {
    constructor(props) {
        super(props);
        this.state = {text: ''};
    }

    render() {
        return(
            <View style={{padding: 10}}>
                <TextInput
                    style={{height: 40}}
                    placeholder="Type here to translate!"
                    onChangeText={(text) => {this.setState({text})}}
                />
                <Text style={{padding: 10, fontSize: 40}}>
                    {this.state.text.split(' ').map((word) => word && '🍕 ').join(' ')}
                </Text>

            </View>
        );
    }

}*/

/*export default class ButtonBasics extends Component {
    _onPressButton() {
        Alert.alert('You pressed the button!');
    }

    _onLongPressButton() {
        Alert.alert('You long pressed the button!');
    }

    render() {
        return(
            <View style={styles.container}>
                <TouchableHighlight onPress={() => this._onPressButton()} underlayColor='white'>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>TouchableHighlight</Text>
                    </View>
                </TouchableHighlight>

                <TouchableOpacity onPress={() => this._onPressButton()}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>TouchableOpacity</Text>
                    </View>
                </TouchableOpacity>

                <TouchableNativeFeedback
                    onPress={() => this._onPressButton()}
                    background={Platform.OS === 'android' ? TouchableNativeFeedback.SelectableBackground() : ''}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>TouchableNativeFeedback</Text>
                    </View>
                </TouchableNativeFeedback>

                <TouchableWithoutFeedback onPress={() => this._onPressButton()}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>TouchableWithoutFeedback</Text>
                    </View>
                </TouchableWithoutFeedback>

                <TouchableHighlight
                    onPress={() => this._onPressButton()}
                    onLongPress={() => this._onLongPressButton()}
                    underlayColor='white'>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>TouchableHighlight with long press</Text>
                    </View>
                </TouchableHighlight>

            </View>
        );
    }
}*/

export default class SectionListBasics extends Component {
    render() {
        return(
            <View style={styles.container}>
                <SectionList
                    sections={[
                        {title: 'A', data: ['Anchorer', 'Arc', 'AAKD']},
                        {title: 'D', data: ['Devin']},
                        {title: 'E', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},
                        {title: 'K', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},
                        {title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},
                    ]}
                    renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
                    renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
                    keyExtractor={(item, index) => index}
                    />
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
    },
    container: {
        paddingTop: 20,
        flex: 1
    },
    sectionHeader: {
        paddingTop: 2,
        paddingBottom: 2,
        paddingLeft: 10,
        paddingRight: 10,
        fontSize: 14,
        fontWeight: 'bold',
        backgroundColor: 'rgba(247,247,247,1.0)'
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44
    },
    button: {
        marginBottom: 30,
        width: 260,
        alignItems: 'center',
        backgroundColor: '#2196F3'
    },
    buttonText: {
        padding: 20,
        color: 'white'
    },
    buttonContainer: {
        margin: 20
    },
    alternativeLayoutButtonContainer: {
        margin: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
});