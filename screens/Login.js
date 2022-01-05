import React, {useState} from 'react';
import {ActivityIndicator, View, StyleSheet, StatusBar} from 'react-native';
import {useDispatch} from 'react-redux';
import {GoogleSigninButton} from '@react-native-google-signin/google-signin';
import * as AuthActions from '../store/actions/authAction';

const Login = () => {
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(false);

    const signIn = () => {
        setIsLoading(true);
        dispatch(AuthActions.Login());
    };

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={"#00bcd4"} barStyle="light-content" />
            {isLoading ? (
                <ActivityIndicator size={'large'} color={'blue'}/>
            ) : (
                <GoogleSigninButton
                    size={GoogleSigninButton.Size.Wide}
                    onPress={signIn}
                />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#00bcd4",
    },
})

export default Login;
