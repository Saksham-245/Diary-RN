import database from '@react-native-firebase/database';

export const getDiaries = (id)=>{
    return async (dispatch)=>{
        const diaries = await database().ref(`diaries/${id}`).once('value').then(snapshot=>{
            return snapshot.val();
        });

        const userData = [];
        for(const key in diaries) {
           userData.push({
               ...diaries[key],
               id: key
           });
        }
       dispatch({
           type: 'GET_DIARIES',
           payload: userData
       });
    }
}

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