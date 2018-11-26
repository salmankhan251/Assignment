import {combineReducers} from 'redux';

const taskReducer = (state=[], action)=>{
    switch(action.type){
        case 'REGISTRATION': state= state.concat(action.payload);
        break;
        default:
            return state
    }

},
reducers=combineReducers({
    registration:taskReducer
});
export default (reducers);
