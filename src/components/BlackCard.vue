<template>
    <div class="columns is-centered">

        <div class="column is-3">
            
            

            <br>

            <div id="card-black" class="card">
                <div class="card-content">
                    <p class="has-text-centered has-text-white">
                        {{ $store.state.table.blackCard }}
                    </p>
                </div>
            </div>

            <button class="button is-warning is-fullwidth" @click="actualizarCarta()">
                Cambiar
            </button>
        </div>
        
    </div>
</template>

<script>
export default {
    name: 'BlackCard',
    methods : {
        actualizarCarta(){
            let id = this.$store.state.table.codigo;
            this.$store.dispatch('setBlackCardAction', id);
        }
    }
}
</script>

<style>
    #card-black {
        display: grid;
        align-items: center;
        background: black;
        border: 1px solid white;
        border-radius: 1ex;
        min-height: 20ex;
    }
</style>