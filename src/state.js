const ADD_PRODUCT = 'ADD_PRODUCT';
const REMOVE_PRODUCT = 'REMOVE_PRODUCT';
const DEFAULT = 'DEFAULT';
const STATE_IS_RAN_OUT = 'STATE_IS_RAN_OUT';
const STATE_IS_LOW_PRIORITY = 'STATE_IS_LOW_PRIORITY';
export const initialState = {
  productsList: [],
  localList: [],
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
    case DEFAULT:
      debugger;
      return {
        ...state,
        localList: [],
      };
    case STATE_IS_RAN_OUT:
      const filterBy = action.isRanOut ? 'Ran out' : 'Have';
      return {
        ...state,
        localList: [...state.productsList.filter(el => el.state === filterBy)],
      };
    case STATE_IS_LOW_PRIORITY:
      debugger;
      return {
        ...state,
        localList: [...state.productsList].sort((a, b) =>
          action.isLowPriority
            ? a.priority - b.priority
            : b.priority - a.priority
        ),
      };
    default:
      return state;
  }
};

export const addProduct = data => ({ type: ADD_PRODUCT, data });
export const removeProduct = id => ({ type: REMOVE_PRODUCT, id });

export const setFilterMiddleware = filterState => {
  switch (filterState) {
    case '0':
      return { type: DEFAULT };
    case '1':
      return { type: STATE_IS_RAN_OUT, isRanOut: true };
    case '2':
      return { type: STATE_IS_RAN_OUT, isRanOut: false };
    case '3':
      return { type: STATE_IS_LOW_PRIORITY, isLowPriority: true };
    case '4':
      return { type: STATE_IS_LOW_PRIORITY, isLowPriority: false };
  }
};
