const initialState = {
  // list: {
  //   data: [],
  //   isLoading: false, // slug
  //   isError: false,
  //   errorMessage: ''
  // },
  // detail: {
  //   data: {},
  //   isLoading: false, // slug
  //   isError: false,
  //   errorMessage: ''
  // }
  listData: [],
  listIsLoading: false,
  listIsError: false,
  listErrorMessage: ''
}

// action = {type: "", payload: ""}
// redux-promise-middleware = _PENDING , _FULFILLED, _REJECTED
const userReducer = (state=initialState, action) => {
  switch (action.type) {
    case "GET_ALL_USERS_PENDING":
      // return {
      //   ...state,
      //   list: {
      //     ...state.list,
      //     isLoading: true
      //   }
      // }
      return {...state, listIsLoading: true}
    case "GET_ALL_USERS_FULFILLED":
      return {...state, listIsLoading: false, listData: action.payload.data}
    case "GET_ALL_USERS_REJECTED":
      return {...state, listIsLoading: false, listIsError: true, listErrorMessage: action.payload.response.data}
    default:
      return state
  }
}

export default userReducer