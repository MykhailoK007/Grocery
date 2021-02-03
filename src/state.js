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
          {
            ...action.data,
            id: state.productsList.length + 1,
            created: createDateFormat(),
          },
        ],
      };
    case REMOVE_PRODUCT:
      return {
        ...state,
        productsList:
          state.productsList.length === 1
            ? []
            : state.productsList.filter(el => el.id !== action.id),
        localList: state.localList.filter(el => el.id !== action.id),
      };
    case DEFAULT:
      return {
        ...state,
        localList: [],
      };
    case STATE_IS_RAN_OUT:
      const filterBy = action.isRanOut ? 'Ran out' : 'Have';
      return {
        ...state,
        localList: state.productsList.filter(el => el.state === filterBy),
      };
    case STATE_IS_LOW_PRIORITY:
      return {
        ...state,
        localList: [...state.productsList].sort((a, b) =>
          action.isLowPriority
            ? b.priority - a.priority
            : a.priority - b.priority
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

// Gets date and return as 19.01.2021
const createDateFormat = () => {
  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth() + 1;
  debugger;
  return `${day < 10 ? '0' + day : day}.${
    month < 10 ? '0' + month : month
  }.${date.getFullYear()}`;
};
