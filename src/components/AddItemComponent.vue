<template id="add-item-template">
<div class="input-group">
    <input type="text" v-model="newItem"
        placeholder="add shopping list item" class="form-control"
        @keyup.enter="addItem">
    <span class="input-group-btn">
        <button class="btn btn-default" type="button"
            @click="addItem">
            Add!
        </button>
    </span>
</div>
</template>

<script>
export default {
    props: ['id'],
    data() {
        return {
            newItem: ''
        }
    },
    methods: {
        addItem: function(e) {
            var text = this.newItem.trim()

            if (text) {
                this.$emit('add', this.newItem)
                this.newItem = ''
                this.$store.dispatch('updateList', this.id)
            }
        }
    }
}
</script>