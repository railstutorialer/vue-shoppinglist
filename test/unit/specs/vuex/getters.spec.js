import getters from '../../../../src/vuex/getters'

describe('getters.js', () => {
    describe('getLists', () => {
        var state
        beforeEach(() => {
            state = {
                shoppinglists: [{id: '1'}]
            }
        })

        it ('should get all lists', () => {
            var lists = getters.getLists(state)
            expect(lists).to.eql([{id: '1'}])
        })
    })

    describe('getListById', () => {
        var state
        beforeEach(() => {
            state = {
                shoppinglists: [{id: '1'}]
            }
        })

        it('should get a list by id', () => {
            var list = getters.getListById(state, '1')
            expect(list).to.eql({id: '1'})
        })
    })    
})