<template>
    <div class="columns is-multiline">
        <div class="column is-3 is-narrow" 
            v-for="(card, index) of items"
            :key="index">

            <white-card :item="card"/>

        </div>
    </div>
</template>

<script>
import WhiteCard from './Card'
export default {
    name: 'WhiteCards',
    components:{
        WhiteCard
    },
    props:['items']
}
</script>