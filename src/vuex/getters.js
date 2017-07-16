export default {
    getLists: state => state.shoppinglists,
    getListById: (state, id) => {
        for (var list of state.shoppinglists) {
            if (list.id === id) {
                return list
            }
        }
    }
}