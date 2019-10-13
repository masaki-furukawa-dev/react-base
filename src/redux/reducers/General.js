const loginReducer = (state = {}, action) => {
    switch(action.type){
        case "Purge":
            return {};
        default:
            return state;
    }
}
export {loginReducer as login};
