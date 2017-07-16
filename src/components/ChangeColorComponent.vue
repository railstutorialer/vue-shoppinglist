<template>
    <div>
        <em>Change the background color of your shopping list here</em>
        <input type="color" :value="color"
            @change="changeColor($event.target.value)">
    </div>
</template>

<script>
export default {
    props: ['id', 'color'],
    methods: {
        changeColor(color) {
            var data = { id: this.id, color: color}
            this.$store.dispatch('changeColor', data)
        }
    }
}
</script>

<style>
  
</style>
