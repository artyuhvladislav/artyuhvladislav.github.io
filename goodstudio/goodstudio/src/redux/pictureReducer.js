const SET_PICTURE = 'SET_PICTURE';

const localImgFn = () => {
    const localImg = window.localStorage.getItem('app_img');
    return (localImg === undefined) ? '' : window.localStorage.getItem('app_img')
}
const initialState = {
       urlImg: localImgFn()
};

const pictureReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_PICTURE:
            window.localStorage.setItem('app_img', action.url);
            return {
                ...state,
                urlImg: action.url
            }

        default:
            return state
    }
}

export const setPicture = (url) =>({type: SET_PICTURE, url});

export default pictureReducer