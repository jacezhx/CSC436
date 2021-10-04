 import{v4 as uuidv4} from 'uuid'
 
 export default function postReducer (state, action) {
  var day = new Date();
  var date = day.getFullYear()+'/'+(day.getMonth()+1)+'/'+day.getDate();
    switch (action.type) {
        case 'CREATE_POST':
          const newPost = { 
              uuid:uuidv4(),
              title: action.title,
              content: action.content, 
              dateCreated: date,
              isComplete:false,
              dateCompleted:""
            }
            return [newPost, ...state ]

          case 'TOGGLE_TODO':
            return state.map(todo => todo.uuid !== action.uuid ? todo : {...todo, isComplete: !todo.isComplete, dateCompleted: !todo.isComplete ? date : ""})


          case 'DELETE_TODO':
            return state.filter(todo =>todo.uuid !== action.uuid)
        default:
           return state;
    }
  }