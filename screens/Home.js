import React, {useCallback, useEffect, useLayoutEffect, useState} from 'react';
import {Button, Image, View,Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import * as AuthActions from '../store/actions/authAction';
import {IconButton} from "react-native-paper";
import {PRIMARY_COLOR} from "../constants/Colors";
import tailwind from "twrnc";
import * as DiaryAction from "../store/actions/diariesAction";

const Home = ({navigation}) => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.auth.user);
    const diaries = useSelector(state => state.diaries.diaries);

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return (
                    <Image source={{uri: user.photoURL}} style={{width: 50, height: 50, borderRadius: 25}}/>
                )
            }
        })
    });

    const loadDiaries = useCallback(async ()=>{
        try {
            await dispatch(DiaryAction.getDiaries(user.uid));
        } catch (e) {
            console.log(e);
        }
    },[dispatch]);

    useEffect(()=>{
        navigation.addListener('focus', loadDiaries);
        return()=>{
            navigation.removeListener('focus', loadDiaries);
        }
    },[loadDiaries]);

    console.log(diaries);


    return (
        <View>
            <IconButton size={50} color={PRIMARY_COLOR} icon="plus-circle" style={tailwind`absolute top-0 right-0`} onPress={() => {
                navigation.navigate('NewDiary');
            }}/>

        </View>
    );
};

export default Home;
