import { USER_NAME, EMAIL, TEL, LANG, AGREE } from "../config";


const initialState = {
    isValid: {
        [USER_NAME]: false,
        [EMAIL]: false,
        [TEL]: false,
        [LANG]: false,
        [AGREE]: false,
    }
};


function reducer(state = initialState, action) {
    switch(action.type) {
        case 'SET_VALID':
            return {
                isValid: { ...state.isValid, [action.payload.elName]: action.payload.isValid }
            };
        default:
            return state;
    }
}


export default reducer;