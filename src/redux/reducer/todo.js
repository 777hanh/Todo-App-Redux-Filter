const initState = {
    todo: [
        {
            id: 1,
            name: 'Learn SpringBoot',
            compeleted: false,
            priority: 'Medium',
        },
        {
            id: 2,
            name: 'Learn ReactJs',
            compeleted: false,
            priority: 'High',
        },
        {
            id: 3,
            name: 'Learn Flutter',
            compeleted: false,
            priority: 'Low',
        }
    ]
}

const todoListReducer = (state = initState, action) => {
    switch (action.type) {
        case 'todo/addTodo':
            // console.log({ action: action.payload.dataForm, state })
            return {
                ...state,
                todo: [
                    ...state.todo,
                    action.payload.dataForm,
                ]
            };

        case 'todo/deleteTodo':
            return {
                ...state,
                todo: state.todo.filter(item => item.id !== action.payload.id)
            };

        case 'todo/completedTodo':
            // console.log(state.todo)
            const newTodo = state.todo.map(item => 
                item.id === action.payload.id ? action.payload : item
                )
                return {
                    todo: newTodo
                };
        default:
            return {
                ...state
            };
    }
}

export default todoListReducer;