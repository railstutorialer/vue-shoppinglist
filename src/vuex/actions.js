import * as types from './mutationTypes'
import api from '../api'
import getters from './getters'

export default {
    changeTitle(store, data) {
        store.commit(types.CHANGE_TITLE, data)
        return store.dispatch('updateList', data.id)
    },
    changeColor(store, data) {
        store.commit(types.CHANGE_COLOR, data)
        return store.dispatch('updateList', data.id)
    },
    populateShoppingLists(store) {
        return api.fetchShoppingLists().then(response => {
                store.commit(types.POPULATE_SHOPPING_LISTS, response.data)
            })
    },
    updateList(store, id) {
        let shoppingList = getters.getListById(store.state, id)
        return api.updateShoppingList(shoppingList)
    },
    createShoppingList(store, shoppingList) {
        return api.addNewShoppingList(shoppingList)
            .then(
                () => {
                    store.dispatch('populateShoppingLists')
                },
                () => {
                    store.commit(types.ADD_SHOPPING_LIST, shoppingList)
                }
            )
    },
    deleteShoppingList(store, id) {
        return api.deleteShoppingList(id)
            .then(
                () => {
                    store.dispatch('populateShoppingLists')
                },
                () => {
                    store.commit(types.DELETE_SHOPPING_LIST, id)
                }
            )
    }
}