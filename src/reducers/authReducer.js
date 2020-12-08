

const auth = (state=null, action) => {
    switch(action.type){

        case 'LOGIN SUCCESS':
            return action.user

        default: return state
    }
}