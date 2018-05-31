export const houseReducer = (state = [], action) => {
  switch (action.type) {
  case 'SEND_TO_STORE' :
    return [...state, ...action.houses];

  default:
    return state;
  }
};