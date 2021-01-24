const ADD_PRODUCT = 'ADD_PRODUCT';
const REMOVE_PRODUCT = 'REMOVE_PRODUCT';
export const initialState = {
  productsList: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...state,
        productsList: [
          ...state.productsList,
          { ...action.data, id: state.productsList.length + 1 },
        ],
      };
    case REMOVE_PRODUCT:
      return {
        ...state,
        productsList:
          state.productsList.length === 1
            ? []
            : [...state.productsList.filter(id => id !== action.id)],
      };
    default:
      return state;
  }
};

export const addProduct = data => ({ type: ADD_PRODUCT, data });
export const removeProduct = id => ({ type: REMOVE_PRODUCT, id });
