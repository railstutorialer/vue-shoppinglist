<template>
  <div id="app" class="container">
    <ul class="nav nav-tabs" role="tablist">
      <li v-for="(list, index) in shoppinglists" role="presentation"
        :class="index === 0 ? 'active' : ''">
        <shopping-list-title-component :title="list.title" :id="list.id"></shopping-list-title-component>
      </li>
      <li>
        <a href="#" @click="addShoppingList">
          <i class="glyphicon glyphicon-plus-sign"></i>
        </a>
      </li>
    </ul>
    <div class="tab-content">
      <div v-for="(list, index) in shoppinglists"
        :id="list.id" class="tab-pane" 
        role="tabpanel" 
        :class="index === 0 ? 'active' : ''">
        <shopping-list-component :id="list.id" 
            :title="list.title" 
            :items="list.items"
            :color="list.color">
        </shopping-list-component>
      </div>
    </div>
  </div>
</template>

<script>
import ShoppingListComponent from './components/ShoppingListComponent.vue'
import ShoppingListTitleComponent from './components/ShoppingListTitleComponent.vue'
import store from './vuex/store'
import { mapGetters, mapActions } from 'vuex'

export default {
  store: store,
  components: {
    ShoppingListComponent,
    ShoppingListTitleComponent
  },
  computed: mapGetters({
    shoppinglists: 'getLists'
  }),
  methods: {
    populateShoppingLists() {
      this.$store.dispatch('populateShoppingLists')
    },
    createShoppingList(list) {
      this.$store.dispatch('createShoppingList', list)
    },
    addShoppingList() {
      let list = {
        title: "New Shopping List",
        items: []
      }
      this.createShoppingList(list)
    }
  },
  mounted() {
    this.populateShoppingLists()
  }
}
</script>

<style>
</style>
