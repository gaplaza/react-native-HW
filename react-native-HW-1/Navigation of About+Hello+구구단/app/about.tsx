
import { Text, View, Image } from "react-native";

export default function About() {
    const text_st = {
        fontSize:20,
        color: 'black'
    };
    return (
        <View>
            <View style={{height:10}} />
            <Text style={text_st}>This is about the app</Text>
            <Image style={{width:200, height:200}} source={require('./cat-icon.png')} />
        </View>
    );
}