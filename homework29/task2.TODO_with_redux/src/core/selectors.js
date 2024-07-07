export default {
    items: state => state.todo.items,
    amount: state => state.todo.items.length,
}