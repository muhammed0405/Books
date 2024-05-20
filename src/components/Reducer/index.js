const initialState = {
	sortedBooks: [],
	count: 1,
	quantity: 1,
	dark: false,
	countOfBook: 0
}
export const Reducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case 'ADD_COUNT':
			return { ...state, count: state.count + 1 }
		case 'MINUS_COUNT':
			return state.count > 1 ? { ...state, count: state.count - 1 } : state
		case 'SET_DEFAULT_COUNT':
			return { ...state, count: 1 }
		case 'CHANGE_DARK':
			return { ...state, dark: (state.dark = !state.dark) }
		case 'SET_COUNT_OF_BOOK':
			return { ...state, countOfBook: localStorage.getItem('length') || 0 }

		case 'SORT_BOOKS':
			return {
				...state,
				sortedBooks: payload.sortedBooks || []
			}
		case 'ADD_COUNT_LOCAL':
			let existingQuantities = JSON.parse(localStorage.getItem('quantity'))
			existingQuantities = existingQuantities !== null ? existingQuantities : {}

			existingQuantities[payload.id] = (existingQuantities[payload.id] || 0) + 1

			console.log(existingQuantities[payload.id], 'this is from Reducer')
			localStorage.setItem('quantity', JSON.stringify(existingQuantities))
			return { ...state }

		case 'MINUS_COUNT_LOCAL':
			let existingQuantity = JSON.parse(localStorage.getItem('quantity'))
			existingQuantity = existingQuantity !== null ? existingQuantity : {}

			if (existingQuantity[payload.id] > 1) {
				existingQuantity[payload.id] = (existingQuantity[payload.id] || 1) - 1
			}

			console.log(existingQuantity[payload.id], 'this is from Reducer')
			localStorage.setItem('quantity', JSON.stringify(existingQuantity))
			return { ...state }
		default:
			return state
	}
}
