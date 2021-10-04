export default function userReducer (state, action) {
    switch (action.type) {
        case 'LOGIN':
          return action.username
        case 'REGISTER':
            return action.username
        case 'LOGOUT':
            return ''
        default:
            return state;
    }
}



