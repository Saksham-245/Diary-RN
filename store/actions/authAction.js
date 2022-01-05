import {GoogleSignin, statusCodes} from "@react-native-google-signin/google-signin";
import auth from '@react-native-firebase/auth';
import {LOGIN_USER} from "../../constants/redux-constants";

GoogleSignin.configure({
    webClientId: '458546632909-ovek975bk83mu7ej1094balukn2inphe.apps.googleusercontent.com'
})
export const Login = () => {
    return async dispatch => {
        try {
            if (await GoogleSignin.hasPlayServices()) {
                const {idToken} = await GoogleSignin.signIn();
                const googleCredential = await auth.GoogleAuthProvider.credential(idToken);
                const user = await auth().signInWithCredential(googleCredential);
                dispatch({
                    type: LOGIN_USER,
                    user: user.user
                })
            }
        } catch (e) {
            if (e === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
                throw new Error('Google Play Services is not available');
            }
            if (e === statusCodes.IN_PROGRESS) {
                throw new Error('Sign in is in progress already');
            }
            if (e === statusCodes.SIGN_IN_REQUIRED) {
                throw new Error('User has not signed in yet');
            }
            if (e === statusCodes.SIGN_IN_FAILED) {
                throw new Error('Sign in failed');
            }
        }
    }
}

export const Logout = () => {
    return async dispatch => {
        try {
            await GoogleSignin.signOut();
            await auth().signOut();
            dispatch({
                type: LOGIN_USER,
                user: null
            })
        } catch (e) {
            console.log(e);
        }
    }
}