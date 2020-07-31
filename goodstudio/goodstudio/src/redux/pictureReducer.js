const SET_PICTURE = 'SET_PICTURE';

const initialState = {
       url: '',
       imgArray:[]
};

const pictureReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_PICTURE:
            return {
                ...state,
                url: action.url,
                imgArray : [...state.imgArray, action.url]
            }
       
        default:
            return state
    }
}

export const setPicture = (url) =>({type: SET_PICTURE, url});

export default pictureReducer