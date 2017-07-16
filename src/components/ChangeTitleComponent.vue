<template id="change-title-template">
    <div>
        <em>Change the title of your shopping list here</em>
        <input :value="title" 
            @input="onInput({id: id, title: $event.target.value})" />
    </div>
</template>

<script>
import {mapActions} from 'vuex'

export default  {
    props: ['title', 'id'],
    methods: mapActions({
        onInput: 'changeTitle'
    })
}
</script>