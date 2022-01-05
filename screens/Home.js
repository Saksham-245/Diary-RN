import React, {useLayoutEffect} from 'react';
import {Button, Text, View} from "react-native";
import {useDispatch, useSelector} from "react-redux";
import * as AuthActions from '../store/actions/authAction';

const Home = () => {
    const dispatch = useDispatch();

    return (
        <View>
            <Text>Home</Text>
            <Text>{user.displayName}</Text>
            <Button title={"Sign Out"} onPress={() => {
                dispatch(AuthActions.Logout());
            }}/>
        </View>
    );
};

export default Home;
