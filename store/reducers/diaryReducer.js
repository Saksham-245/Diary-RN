const initialState = {
    diaries: [],
}

export const diariesReducer = (state=initialState,action)=>{
    switch(action.type){
        case 'GET_DIARIES':
            return {
                ...state,
                diaries: action.payload
            }
        case 'ADD_DIARY':
            return {
                ...state,
                diaries: [...state.diaries,action.payload]
            }
        case 'DELETE_DIARY':
            return {
                ...state,
                diaries: state.diaries.filter(diary=>diary._id!==action.payload)
            }
        case 'UPDATE_DIARY':
            return {
                ...state,
                diaries: state.diaries.map(diary=>diary._id===action.payload._id?action.payload:diary)
            }
        default:
            return state
    }
}