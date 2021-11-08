
function userReducer (state, action) {
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

function accountsReducer (state, action) {
  switch (action.type) {
      case 'SHOW':
        return action.accounts
      default:
          return state;
  }
}

function postsReducer (state, action) {
    var day = new Date();
    var date = day.getFullYear()+'/'+(day.getMonth()+1)+'/'+day.getDate();
      switch (action.type) {
          case 'CREATE_POST':
            const newPost = { 
                title: action.title,
                content: action.content, 
                dateCreated: date,
                isComplete: false,
                dateCompleted: null
              }
              return [newPost, ...state ]
  
            case 'TOGGLE_TODO':
              return state.map((p,i) => p.id !== action.postId ? p : {...p, isComplete: !p.isComplete, dateCompleted: !p.isComplete ? date : ""})
  
            case 'DELETE_TODO':
              return state.filter((p,i) => p.id !== action.postId)
            case 'FETCH_POSTS':
                return action.posts
          default:
             return state;
      }
    }
    export default function appReducer (state, action) {
        return {
            user: userReducer(state.user, action),
            posts: postsReducer(state.posts, action),
            accounts: accountsReducer(state.accounts, action)
        }
    }
