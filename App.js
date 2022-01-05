import React, {useEffect} from "react";
import {AsyncStorage, Text, View} from "react-native";
import {NavigationContainer} from "@react-navigation/native";
import AuthNavigator from "./navigation/AuthNavigator";
import DiaryNavigator from "./navigation/DiaryNavigator";
import {useSelector} from "react-redux";

const App = () => {
    const user = useSelector(state => state.auth.user);

    return (
        <NavigationContainer>
            {!user ? <AuthNavigator/> : <DiaryNavigator/>}
        </NavigationContainer>
    )
}

export default App;