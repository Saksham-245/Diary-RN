import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import AuthNavigator from "./navigation/AuthNavigator";
import DiaryNavigator from "./navigation/DiaryNavigator";
import {useSelector} from "react-redux";
import {Provider} from "react-native-paper";

const App = () => {
    const user = useSelector(state => state.auth.user);

    return (
        <Provider>
            <NavigationContainer>
                {!user ? <AuthNavigator/> : <DiaryNavigator/>}
            </NavigationContainer>
        </Provider>
    )
}

export default App;