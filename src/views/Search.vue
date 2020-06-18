<template>
    <div class="container">
        <div class="columns is-centered">
        
            <div class="column is-5-tablet is-4-desktop is-3-widescreen">
                <form action="" class="box">
                    <h5 class="subtitle is-5 has-text-centered has-text-black">Ingrese código de la mesa</h5>

                    <button class="button is-info is-fullwidth" @click="createTable()">Crear mesa</button>

                    <br/>

                    <div class="field">
                        <div class="control">
                            <input type="text" class="input" 
                                placeholder="Código" v-model="codigo" required>
                        </div>
                    </div>

                    <div class="field">
                        <div class="control">
                            <button class="button is-fullwidth is-primary"
                                @click="searchTable" :disabled="camposVacios">
                                Cargar
                            </button>
                        </div>
                    </div>
                </form>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            codigo: null
        }
    },
    computed:{
        camposVacios(){
            if(this.codigo)
                return false;

            return true;
        }
    },
    mounted(){
        this.$store.dispatch('setCardsAction');
    },
    methods:{
        createTable(){
            this.$router.push('/crearmesa');
        },
        searchTable(){
            this.codigo = this.codigo.toUpperCase();
            this.$store.dispatch('searchTableAction', this.codigo);
            this.codigo = null;
        }
    }
}
</script>

<style>
    @media screen and (min-width: 769px), print
    {
        .column.is-offset-4 {
            margin-left: 37.8%;
        }
    }
</style>