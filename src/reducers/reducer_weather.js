import { FETCH_WEATHER } from '../actions/index'

export default function (state = [], action) {
if (action.error) {
return state;
}
switch (action.type) {
case FETCH_WEATHER:                     
return [action.payload.data, ...state];// [ city, city, city ] NOT [city [city, city [city]]] ----- last one is wrong !
// If we use PUSH instead of CONCAT we mutate state which is not good.
// Instead Concat retturns the old state PLUS the new state and does not modify the state alltogheter WITHOUT ES6 syntax - state.concat([ action.payload.data ]) ;
}

return state;
}   
    
 