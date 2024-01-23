const bookData = require("../bookData/booksList")

const initialState = {
  count: 0,
    quantity: 1,
    bookId: null,
    dark: false,
    countOfBook: 0,
};

console.log(bookData)
export const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_COUNT":
            return { ...state, count: state.count + 1 };
        case "MINUS_COUNT":
            if(state.count > 0){
                return { ...state, count: state.count - 1 };
            }
            break;
        case "CHANGE_DARK" :
            return {...state, dark: state.dark = !state.dark}
        case "SET_COUNT_OF_BOOK" :
            return {...state, countOfBook: state.countOfBook = localStorage.getItem("length") || 0}
        default:
            return state;
    }
};

