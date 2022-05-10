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
        default:
            return {
                ...state
            };
    }
}

export default filterReducer;