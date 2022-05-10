export const ADD_TODO = (data) => {
    // console.log(data);
    return {
        type: 'todo/addTodo',
        payload: data,
    }
}

export const DELETE_TODO = (data) => {
    // console.log(data);
    return {
        type: 'todo/deleteTodo',
        payload: data,
    }
}

export const COMPLETED_TODO = (data) => {
    // console.log(data);
    return {
        type: 'todo/completedTodo',
        payload: data,
    }
}
