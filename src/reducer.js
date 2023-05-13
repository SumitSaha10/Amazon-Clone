export const initialState = {
  basket: [],
};

const reducer = (state, action) => {
  console.log(action)
  switch (action.type) {
    case 'ADD_TO_BASKET':

      return {
        ...state,
        basket: [...state.basket, action.item]
      };
    case 'REMOVE_FROM_BASKET':

      let newBasket = [...state.basket]
      let index = state.basket.findIndex((basketItem) => basketItem.id === action.id)
      if (index >= 0) {
        //index found and remove that index from the basket
        newBasket.splice(index, 1)

      }
      else {
        console.warn("Can't remove the product")
      }
      return { ...state, basket: newBasket };
    default:
      return state;
  }
};

export default reducer;
