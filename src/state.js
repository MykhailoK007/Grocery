export const initialState = {
  productsList: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD":
      debugger;
      return {
        ...state,
        productsList: [...state.productsList, { ...action.data }],
      };
    default:
      return state;
  }
};

export const addProduct = (data) => {
  debugger;
  return {
    type: "ADD",
    data,
  };
};
