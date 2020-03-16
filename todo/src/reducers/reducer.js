export const initialState = [{
    item: '',
    completed: false,
    id: new Date()
}]

export function todoReducer(state, action) {
    switch(action.type) {
        case "ADD_ITEM":
            return [
                ...state,
                action.payload
            ]
        case "COMPLETED_ITEM":
            return state.map(item => {
                return item.id === action.payload ?
                {...item, completed: !item.completed} :item
            })
        case "CLEAR_COMPLETED":
            return state.filter(item => !item.completed)
        default:
            return state;
    }
}