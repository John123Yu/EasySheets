import { combineReducers } from "redux";
// import _ from "lodash";
// // import ActualReducer from "./reducer_actual";

// const magicPhrase = _.curry((magicWord, muggleWord) => magicWord + muggleWord);
// const muggleWordAccepter = magicPhrase("Abra kedabra ");
// muggleWordAccepter("dishwasher");
// console.log(muggleWordAccepter("dishwasher"));

const rootReducer = combineReducers({
  // actualMap: ActualReducer
});

export default rootReducer;
