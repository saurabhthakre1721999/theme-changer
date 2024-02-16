 export const reducer=( state, action)=>{
    console.log(action)
    if (action.type === "incriment") {
        return state + 1;
  } else if ( action .type=== "decrement"){
    return state - 1; } return state}