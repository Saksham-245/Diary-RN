import React from 'react';
import {View} from "react-native";
import {useDispatch} from "react-redux";
import {GoogleSigninButton} from "@react-native-google-signin/google-signin";
import * as AuthActions from '../store/actions/authAction';

const Login = () => {
    const dispatch = useDispatch();
    return (
        <View>
            <GoogleSigninButton size={GoogleSigninButton.Size.Wide} onPress={() => {
                dispatch(AuthActions.Login());
            }}/>
        </View>
    );
};

export default Login;
