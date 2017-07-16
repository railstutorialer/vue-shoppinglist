import * as types from './mutationTypes'
import getters from './getters'

export default {
    [types.CHANGE_TITLE](state, data) {
        getters.getListById(state, data.id).title = data.title
    },
    [types.POPULATE_SHOPPING_LISTS](state, lists) {
        state.shoppinglists = lists
    },
    [types.CHANGE_COLOR](state, data) {
        getters.getListById(state, data.id).color = data.color
    },
    [types.ADD_SHOPPING_LIST](state, newList) {
        if (typeof newList === 'object') {
            state.shoppinglists.push(newList)
        }
    },
    [types.DELETE_SHOPPING_LIST](state, id) {
        for (var i = 0; i < state.shoppinglists.length; ++i) {
            var list = state.shoppinglists[i]
            if (list.id === id) {
                state.shoppinglists.splice(i, 1)
                break
            }
        }
    }
}