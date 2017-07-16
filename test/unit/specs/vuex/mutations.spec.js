import mutations from '../../../../src/vuex/mutations'
import {ADD_SHOPPING_LIST, DELETE_SHOPPING_LIST, POPULATE_SHOPPING_LISTS, CHANGE_TITLE} from '../../../../src/vuex/mutationTypes'

describe('mutations.js', () => {


    describe('ADD_SHOPPING_LIST', () => {
        var state
        beforeEach(() => {
            state = {
                shoppinglists: []
            }
        })

        it('should add item to the shopping list array and increase its length', () => {
            mutations[ADD_SHOPPING_LIST](state, {id: '1'})
            expect(state.shoppinglists).to.eql([{id: '1'}])
            expect(state.shoppinglists).to.have.length(1)
        })

        it('should not add the item if item is empty', () => {
            mutations[ADD_SHOPPING_LIST](state)
            expect(state.shoppinglists).to.have.length(0)
        })
    })

    describe('DELETE_SHOPPING_LIST', () => {
        var state
        beforeEach(() => {
            state = {
                shoppinglists: [{id: '1'}]
            }
        })

        it('should delete item from the shopping list array', () => {
            mutations[DELETE_SHOPPING_LIST](state, '1')
            expect(state.shoppinglists).to.eql([])
            expect(state.shoppinglists).to.have.length(0)
        })

        it('should not delete the item if the id does not exist', () => {
            mutations[DELETE_SHOPPING_LIST](state, '2')
            expect(state.shoppinglists).to.have.length(1)
        })
    })

    describe('POPULATE_SHOPPING_LISTS', () => {
        var state
        beforeEach(() => {
            state = {
                shoppinglists: [{id: '1'}]
            }
        })

        it('should override the shopping list', () => {
            var newLists = [{id: '2'}]
            mutations[POPULATE_SHOPPING_LISTS](state, newLists)
            expect(state.shoppinglists).to.eql(newLists)
        })
    })
})