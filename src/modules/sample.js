import {handleActions} from 'redux-actions';
import * as api from '../lib/api';
import createRequestThunk from '../lib/createRequestThunk';

const GET_POST = 'sample/GET_POST';
const GET_POST_SUCCESS = 'sample/GET_POST_SUCCESS';

const GET_USER = 'sample/GET_USER';
const GET_USER_SUCCESS = 'sample/GET_USER_SUCCESS';


export const getPost = createRequestThunk(GET_POST, api.getPost);
export const getUsers = createRequestThunk(GET_USER, api.getUsers);

const initialState = {
    post: null,
    users: null
};

const sample = handleActions({
    [GET_POST_SUCCESS]: (state, action) => ({
        ...state,
        loading : {
            ...state.loading,
            GET_POST : false
        },
        post: action.payload
    }),
    [GET_USER_SUCCESS]: (state, action) => ({
        ...state,
        loading : {
            ...state.loading,
            GET_USER : false
        },
        users: action.payload
    }),
},
initialState
)

export default sample;