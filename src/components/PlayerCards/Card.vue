<template>
    <div>
        <div class="card card-white">
            <div class="card-content">
                <p class="has-text-centered">
                    {{ item.card }}
                </p>
            </div>
        </div>
        <button class="button is-warning is-fullwidth"
            @click="lanzarCarta(item.index)">
            Lanzar
        </button>
    </div>
</template>

<script>
    export default {
        name: 'CurrentCard',
        props:['item'],
        methods:{
            lanzarCarta(index){
                var codigo = this.$store.state.table.codigo;
                this.$store.dispatch('setCurrentCardAction', index);
                this.$store.dispatch('setWhiteCardsAction', codigo);
                this.$emit('lanzar');
            }
        }
    }
</script>

<style>
    .card-white {
        display: grid;
        align-items: center;
        border: 1px solid black;
        border-radius: 1ex;
        min-height: 20ex;
    }
</style>