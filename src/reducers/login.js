export default (state={}, action) => {
    if(action.response){
        return Object.assign({}, action.response.data);
    }   
    return state;
}