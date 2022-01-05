import database from '@react-native-firebase/database';


export const saveDiary = (id,diary)=>{
    return async dispatch=>{
        try {
            await database().ref(`/diaries/${id}`).push({
                diary: diary
            })
            dispatch({
                type: 'SAVE_DIARY',
                payload: diary
            })
        }catch (e){
            console.log(e);
        }
    }
}