let initialState = [];

export default function(state = initialState, action) {
  if (action.payload === undefined) return state;
  return action.payload;
}
