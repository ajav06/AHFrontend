<template>
    <div>
        <div class="columns is-centered">

            <div class="column is-3 has-text-centered">
                <h3 class="title is-3">
                    Usuario: {{ $store.state.player.username }}
                </h3>

                <button class="button is-success" @click="recargar()">
                    Actualizar
                </button>
            </div>
        
        </div>

        <div class="columns is-multiline">

            <div class="column is-3 is-narrow" 
                v-for="(card, index) of items"
                :key="index">

                <current-card :item="{ index, card }"/>

            </div>
        </div>
    </div>
</template>

<script>
import CurrentCard from './Card'
export default {
    name: 'PlayerCards',
    components:{
        CurrentCard
    },
    data() {
        return {
            items: this.$store.state.player.cards
        }
    },
    mounted(){
        if(this.$store.state.table.codigo != null)
            var codigo = this.$store.state.table.codigo;
            this.$store.dispatch('setWhiteCardsAction', codigo);
            this.$store.dispatch('setCardsAction');
            this.items = this.$store.state.player.cards;
    },
    methods: {
        recargar(){
            this.$store.dispatch('setCardsAction');
            this.items = this.$store.state.player.cards;
        }
    }
}
</script>