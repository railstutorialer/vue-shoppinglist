<template>
  <div :style="{backgroundColor: color}">
    <h2>{{title}}</h2>
    <add-item-component :id="id" @add="addItem"></add-item-component>
    <items-component :id="id" :items="items"></items-component>
    <div class="footer">
      <hr />
      <change-title-component :id="id" :title="title"></change-title-component>
      <change-color-component :id="id" :color="color"></change-color-component>
    </div>
  </div>
</template>

<script>
import AddItemComponent from './AddItemComponent'
import ItemsComponent from './ItemsComponent'
import ChangeTitleComponent from './ChangeTitleComponent'
import ChangeColorComponent from './ChangeColorComponent'

import Vue from 'vue'
export default {
  components: {
    AddItemComponent,
    ItemsComponent,
    ChangeTitleComponent,
    ChangeColorComponent
  },
  props: ['id', 'title', 'items', 'color'],
  methods: {
        addItem (text) {

            this.items.push({
                text: text,
                color: 'white',
                checked: false
            })
        }
    }
}
</script>

<style>
.footer {
    font-size: 0.7em;
    margin-top: 20vh;
}
</style>