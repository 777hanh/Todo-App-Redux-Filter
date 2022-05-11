export const SEARCH_TODO = (data) => {
    // console.log(data);
    return {
        type: 'search/searchFilterChange',
        payload: data,
    }
}

export const STATUS_TODO = (data) => {
    return {
        type: 'search/statusFilterChange',
        payload: data,
    }
}

export const PRIORITY_TODO = (data) => { //data is array
    return {
        type: 'search/priorityFilterChange',
        payload: data,
    }
}