import { useState } from 'react';
import React from 'react';
import { Text, View, Button, TextInput } from "react-native";

export default function Hello() {
    const text_st = {
        fontSize: 20,
        color: 'black'
    };

    var input_st = {fontSize:20, borderWidth:1, padding:10, margin:10};

    const [name, setName] = useState('');

    return (
        <View style={{ flex: 1, padding: 10 }}>
            <View style={{ height: 10 }} />
            <Text style={text_st}>Hello, {name}</Text>
            <TextInput 
                style={input_st}
                onChangeText={(t) => setName(t)} 
            />
            <View style={{ flexDirection: 'row', justifyContent: 'flex-end', marginTop: 10 }}>
                <View style={{ marginRight: 10 }}>
                    <Button title="HELLO" onPress={() => {}} />
                </View>
                <Button title="NICE" onPress={() => {}} />
            </View>
        </View>
    );
}