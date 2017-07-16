<template id="items-template">
    <ul>
        <item-component :id="id" v-for="item in items" :item="item"></item-component>
    </ul>
</template>

<script>
import ItemComponent from './ItemComponent.vue';
export default {
    components: {ItemComponent},
    props: ['id', 'items']
}
</script>