import React, {useState} from 'react';
import {ActivityIndicator, View} from "react-native";
import {useDispatch} from "react-redux";
import {GoogleSigninButton} from "@react-native-google-signin/google-signin";
import * as AuthActions from '../store/actions/authAction';

const Login = () => {
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(false);

    const signIn = () => {
        setIsLoading(true);
        dispatch(AuthActions.Login());
    }


    return (
        <View>
            {
                isLoading ? <ActivityIndicator size={"large"} color={"blue"}/> :
                    <GoogleSigninButton size={GoogleSigninButton.Size.Wide} onPress={signIn}/>
            }
        </View>
    );
};

export default Login;
