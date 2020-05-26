<template>
    <div class="columns is-multiline">
        <div class="column is-3 is-narrow" 
            v-for="(card, index) of items"
            :key="index">

            <card-white :item="card"/>

        </div>
    </div>
</template>

<script>
import CardWhite from './Card'
export default {
    name: 'CardsWhite',
    components:{
        CardWhite
    },
    data() {
        return {
            items:[
                {
                    name: 'Player 1',
                    card:'Ser un güevón.'
                },
                {
                    name: 'Player 2',
                    card:'Ser un güevón.'
                },
                {
                    name: 'Player 3',
                    card:'Ser un güevón.'
                },
                {
                    name: 'Player 4',
                    card:'Ser un güevón.'
                },
            ]
        }
    }
}
</script>