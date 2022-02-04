const searchReducer = (state = "", action) =>{
    switch(action.type){
        case 'SET_SEARCH':
            return state;
        default:
            return "";
    }
}

export default searchReducer;