export const SEARCH_TODO = (data) => {
    // console.log(data);
    return {
        type: 'search/searchFilterChange',
        payload: data,
    }
}