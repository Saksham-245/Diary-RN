import React from 'react';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Home from "../screens/Home";
import NewDiary from "../screens/NewDiary";

const Stack = createNativeStackNavigator();

const DiaryNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name={"Home"} component={Home}/>
            <Stack.Screen name={"NewDiary"} component={NewDiary} options={{headerTitle:'New Diary'}}/>
        </Stack.Navigator>
    );
};

export default DiaryNavigator;
