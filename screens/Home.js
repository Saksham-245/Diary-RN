import React, {useCallback, useEffect, useLayoutEffect, useState} from 'react';
import {
    Dimensions,
    FlatList,
    Image,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {IconButton} from 'react-native-paper';
import {PRIMARY_COLOR} from '../constants/Colors';
import tailwind from 'twrnc';
import * as DiaryAction from '../store/actions/diariesAction';
import {ActivityIndicator} from 'react-native-paper';
import TextCard from '../components/TextCard';

const Home = ({navigation}) => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.auth.user);
    const diaries = useSelector(state => state.diaries.diaries);
    const [isLoading, setIsLoading] = useState(false);

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return (
                    <View style={{flexDirection: 'row'}}>
                        <IconButton icon={"settings"} color={PRIMARY_COLOR} size={24}
                                    onPress={() => navigation.navigate('Settings')}/>
                        <Image
                            source={{uri: user.photoURL}}
                            style={{width: 50, height: 50, borderRadius: 25}}
                        />
                    </View>
                );
            },
        });
    });

    const loadDiaries = useCallback(async () => {
        try {
            await dispatch(DiaryAction.getDiaries(user.uid));
        } catch (e) {
            console.log(e);
        }
    }, [dispatch]);

    useEffect(() => {
        navigation.addListener('focus', loadDiaries);
        return () => {
            navigation.removeListener('focus', loadDiaries);
        };
    }, [loadDiaries]);

    useEffect(() => {
        setIsLoading(true);
        loadDiaries().then(() => {
            setIsLoading(false);
        });
    }, [loadDiaries]);

    const renderUI = () => {
        if (diaries.length === 0 && !isLoading) {
            return <Text style={styles.noText}>No Diaries to show</Text>;
        }
        if (isLoading) {
            return (
                <ActivityIndicator
                    animating={true}
                    color={PRIMARY_COLOR}
                    style={styles.spinner}
                />
            );
        } else {
            return (
                <FlatList
                    data={diaries}
                    numColumns={2}
                    contentContainerStyle={{
                        paddingBottom: Dimensions.get('window').height * 0.2 - 50,
                    }}
                    renderItem={({item}) => {
                        return <TextCard diary={item.diary}/>;
                    }}
                    keyExtractor={item => item.id}
                />
            );
        }
    };

    return (
        <View>
            <IconButton
                size={50}
                color={PRIMARY_COLOR}
                icon="plus-circle"
                style={[tailwind`inset-y-0 right-0`, styles.button]}
                onPress={() => {
                    navigation.navigate('NewDiary');
                }}
            />

            {renderUI()}
        </View>
    );
};

const styles = StyleSheet.create({
    spinner: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: Dimensions.get('window').height / 2 - 100,
    },
    button: {
        left: Dimensions.get('window').width - 90,
    },
    noText: {
        fontSize: 20,
        textAlign: 'center',
        marginTop: Dimensions.get('window').height / 2 - 100,
    },
});

export default Home;
