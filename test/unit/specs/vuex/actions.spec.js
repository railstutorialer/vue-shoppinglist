import actions from '../../../../src/vuex/actions'
import {CHANGE_TITLE, POPULATE_SHOPPING_LISTS} from '../../../../src/vuex/mutationTypes'

describe('actions.js', () => {
    var lists
    var store
    var server

    var successDelete = {delete: true}
    var successPost = {post: true}
    var successPut = {put: true}

    beforeEach(() => {
        lists = [{
            id: '1',
            title: 'Groceries'
        }, {
            id: '2',
            title: 'Clothes'
        }]
        store = {
            commit: (method, data) => {},
            dispatch: () => {
                return Promise.resolve()
            },
            state: {
                shoppinglists: lists
            }
        }
        sinon.stub(store, 'commit')

        server = sinon.fakeServer.create()
        server.respondWith("GET", /shoppinglists/, xhr => {
            xhr.respond(200, {'Content-Type': 'application/json'}, 
                JSON.stringify(lists))
        })
        server.respondWith("POST", /shoppinglists/, xhr => {
            xhr.respond(200, {'Content-Type': 'application/json'},
                JSON.stringify(successPost))
        })
        server.respondWith("PUT", /shoppinglists/, xhr => {
            xhr.respond(200, {'Content-Type': 'application/json'},
                JSON.stringify(successPut))
        })
        server.respondWith("DELETE", /shoppinglists/, xhr => {
            xhr.respond(200, {'Content-Type': 'application/json'},
                JSON.stringify(successDelete))
        })
        server.autoRespond = true
    })

    afterEach(function () {
        store.commit.restore()
        server.restore()
    })

    describe('populateShoppingLists', () => {
        it('should call commit method with POPULATE_SHOPPING_LIST and with mocked lists', done => {
            actions.populateShoppingLists(store)
                .then(() => {
                    expect(store.commit).to.have.been.calledWith(POPULATE_SHOPPING_LISTS,
                    lists)
                    done()
                })
                .catch(done)
        })
    })

    describe('changeTitle', () => {
        it('should call commit method with CHANGE_TITLE string', done => {
            let title = 'new title'
            actions.changeTitle(store, {title: title, id: '1'})
                .then(() => {
                    expect(store.commit).to.have.been.calledWith(CHANGE_TITLE,
                        {title: title, id: '1'})
                    done()
                })
                .catch(done)
        })
    })

    describe('updateList', () => {
        it('should update the list', (done) => {
            actions.updateList(store, '1')
                .then(() => done())
                .catch(done)
        })
    })

    describe('createShoppingList', () => {
        it('should create the list', (done) => {
            actions.createShoppingList(store, {id: '3'})
                .then(done)
                .catch(done)
        })
    })

    describe('deleteShoppingList', () => {
        it('should delete the list', (done) => {
            actions.deleteShoppingList(store, {id: '2'})
                .then(done)
                .catch(done)
        })
    })
})