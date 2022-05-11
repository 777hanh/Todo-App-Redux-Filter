const initState = {
    search: '',
    status: 'All',
    priority: [],
};

const filterReducer = (state = initState, action) => {
    switch (action.type) {
        case 'search/searchFilterChange':
            // console.log(action)
            return {
                ...state,
                search: action.payload
            };

        case 'search/statusFilterChange':
            // console.log(state)
            return {
                ...state,
                status: action.payload
            };

        case 'search/priorityFilterChange':
            // console.log(state)
            return {
                ...state,
                priority: action.payload
            }

        default:
            return {
                ...state
            };
    }
}

export default filterReducer;