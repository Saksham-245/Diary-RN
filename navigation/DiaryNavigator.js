import React from 'react';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Home from "../screens/Home";
import NewDiary from "../screens/NewDiary";
import Settings from "../screens/Settings";
import Detail from '../screens/Detail'

const Stack = createNativeStackNavigator();

const DiaryNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name={"Home"} component={Home}/>
            <Stack.Screen name={"NewDiary"} component={NewDiary} options={{headerTitle:'New Diary'}}/>
            <Stack.Screen name={"Settings"} component={Settings}/>
            <Stack.Screen name={"Detail"} component={Detail}/>
        </Stack.Navigator>
    );
};

export default DiaryNavigator;
