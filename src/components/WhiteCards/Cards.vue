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
    data() {
        return {
            items: this.$store.state.table.whiteCards
        }
    },
    mounted(){
        if(this.$store.state.table.codigo != null)
            var codigo = this.$store.state.table.codigo;
            this.$store.dispatch('setWhiteCardsAction', codigo);
            this.items = this.$store.state.table.whiteCards;
            this.$store.dispatch('setCardsAction');
    },
}
</script>