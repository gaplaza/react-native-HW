import { useState } from 'react';
import React from 'react';
import { Text, Button, View, StyleSheet } from "react-native";

var text_st = {fontSize:30, backgroundColor: 'lightgray',
    padding: 10, margin: 10
};

export default function Mult() {
    const [A, setA] = useState(3);
    const [B, setB] = useState(4);

    return (
        <View style={styles.container}>
            <View style={styles.equationContainer}>
                <Text style={text_st}>{A}</Text>
                <Text style={styles.equationText}>×</Text>
                <Text style={text_st}>{B}</Text>
                <Text style={styles.equationText}>=</Text>
                <Text style={text_st}>{A * B}</Text>
            </View>
            <View style={styles.buttonsContainer}>
                <View style={styles.buttonColumn}>
                    <Button title="+" onPress={() => setA(A + 1)} color="#007AFF" />
                    <View style={{ height: 10 }} />
                    <Button title="-" onPress={() => setA(A - 1)} color="#007AFF" />
                </View>
                <View style={styles.buttonColumn}>
                    <Button title="+" onPress={() => setB(B + 1)} color="#007AFF" />
                    <View style={{ height: 10 }} />
                    <Button title="-" onPress={() => setB(B - 1)} color="#007AFF" />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        alignItems: 'center',
    },
    equationContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    equationText: {
        fontSize: 30,
        fontWeight: 'bold',
        marginHorizontal: 5,
        color: 'black',
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
    },
    buttonColumn: {
        flexDirection: 'column',
        alignItems: 'center',
        marginHorizontal: 20,
    },
});