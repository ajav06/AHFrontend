<template>
    <div class="container">
        <h4 class="title is-4 has-text-centered">Código: {{codigo}}</h4>

        <div class="has-text-centered">
            <div class="dropdown" :class="{'is-active' : dropdown}" @click="cambierEstadoDropdown()">

                <div class="dropdown-trigger">
                    <button class="button " aria-haspopup="true"
                        aria-controls="dropdown-menu">

                        <span >Opciones</span>
                        <span class="icon is-small">
                            <i class="fas fa-angle-down"></i>
                        </span>
                        
                    </button>
                </div>

                <div class="dropdown-menu" id="dropdown-menu" role="menu">
                    <div class="dropdown-content">

                        <a class="dropdown-item" @click="iniciarJuego()"
                            v-show="!$store.state.table.is_init">
                            Iniciar juego
                        </a>

                        <a class="dropdown-item" @click="repartirCartas()"
                            v-show="$store.state.table.is_init">
                            Repartir Cartas
                        </a>

                        <a class="dropdown-item" @click="actualizarCartas()"
                            v-show="$store.state.table.is_init">
                            Actualizar Cartas
                        </a>

                        <a class="dropdown-item has-background-danger 
                            has-text-weight-bold has-text-black"
                            v-show="$store.state.table.codigo"
                            @click="salirMesa()">
                            Salir de la mesa
                        </a>

                    </div>
                </div>

            </div>
        </div>

        <black-card/>
        <white-cards :items="whiteCards"/>
    </div>
</template>

<script>
import BlackCard from '../components/BlackCard';
import WhiteCards from '../components/WhiteCards/Cards'

export default {
    name: 'Table',
    components:{
        BlackCard,
        WhiteCards
    },
    data(){
        return {
            codigo: null,
            dropdown: false,
            whiteCards: this.$store.state.table.whiteCards
        }
    },
    created(){
        this.$store.dispatch('setTableAction');
        this.codigo = this.$store.state.table.codigo;
    },
    updated(){
        this.whiteCards = this.$store.state.table.whiteCards;
    },
    mounted(){
        if(this.codigo != null)
            var codigo = this.$store.state.table.codigo;
            this.$store.dispatch('setWhiteCardsAction', codigo);
            this.$store.dispatch('setCardsAction');
    },
    methods:{
        cambierEstadoDropdown(){
            this.dropdown = !this.dropdown;
        },
        iniciarJuego(){
            this.$store.dispatch('initGameAction', this.codigo);
        },
        repartirCartas(){
            this.$store.dispatch('setWCardsAction', this.codigo);
        },
        actualizarCartas(){
            this.$store.dispatch('setWhiteCardsAction', this.codigo);
            this.whiteCards = this.$store.state.table.whiteCards;
            this.$forceUpdate();
        },
        salirMesa(){

            Swal.fire({
                icon: 'info',
                title: 'Salir de la mesa',
                text: '¿Desea salir?',
                showCancelButton:true,
                cancelButtonColor:'#d33',
                confirmButtonColor:'#48c774',
                cancelButtonText:'No',
                confirmButtonText:'Sí',

            }).then(result => {
                if (result.value){
                    this.$store.dispatch('setExitAction');
                    this.$forceUpdate();
                }
            });
        }
    },
}
</script>

<style>
    .dropdown-trigger button {
        min-width: 12rem;
        background-color: #60efdb;
    }

    .dropdown-content{
        background-color: #60efdb;
    }

    a.dropdown-item {
        padding-right: 1rem;
        text-align: center;
    }
</style>