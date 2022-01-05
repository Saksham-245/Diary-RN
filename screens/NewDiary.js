import React from 'react';
import {Text, View} from "react-native";
import tailwind from "twrnc";
import {Button, TextInput} from "react-native-paper";
import {useSelector} from "react-redux";

const NewDiary = ({navigation}) => {
    const [text, setText] = React.useState('');
    const [error,setError] = React.useState(false);
    const user = useSelector(state => state.auth.user);

    console.log(user);

    const saveDiary = ()=>{
        if(text.length === 0) {
            setError(true);
        }else{
            navigation.goBack();
        }
    }

    return (
        <View style={tailwind`top-10 px-2 py-2`}>
            <TextInput label={"Type your diary here"} value={text} multiline={true} numberOfLines={24}
                       onChangeText={text => setText(text)} error={error}/>
            <Button mode={"contained"} style={tailwind`top-8`} onPress={saveDiary}>Save</Button>
        </View>
    );
};

export default NewDiary;
