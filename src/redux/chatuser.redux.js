import axios from 'axios';

const USER_LIST = 'USER_LIST';
const initState = {
    userList: []
};

export function chatuser (state = initState, action) {
    switch (action.type) {
        case USER_LIST:
            return {...state, userList: action.payload}
        default:
            return state;
    }
}

function userList (data) {
    return {type: USER_LIST, payload: data}
}

export function getUserList (type) {
    return dispatch => {
        axios.get('/mproxy/user/list?type=' + type)
            .then(response => {
                if (response.status === 200 && response.data.code === 0) {
                    dispatch(userList(response.data.data));
                }
            });
    }
}

