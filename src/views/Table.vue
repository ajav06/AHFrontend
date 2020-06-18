<template>
    <div class="container">
        <h4 class="title is-4 has-text-centered">Código: {{codigo}}</h4>

        <div class="has-text-centered">
            <div class="dropdown" :class="{'is-active' : dropdown}" @click="cambierEstadoDropdown()">

                <div class="dropdown-trigger">
                    <button class="button has-background-grey-lighter" aria-haspopup="true"
                        aria-controls="dropdown-menu">

                        <span >Opciones</span>
                        <span class="icon is-small">
                            <i class="fas fa-angle-down"></i>
                        </span>
                        
                    </button>
                </div>

                <div class="dropdown-menu" id="dropdown-menu" role="menu">
                    <div class="dropdown-content has-background-grey-lighter">

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
                            has-text-weight-bold has-text-black">
                            Salir de la mesa
                        </a>

                    </div>
                </div>

            </div>
        </div>

        <black-card/>
        <white-cards/>
    </div>
</template>

<script>
import BlackCard from '../components/BlackCard';
import WhiteCards from '../components/WhiteCards/Cards'

export default {
    name: 'Table',
    data(){
        return {
            codigo: null,
            dropdown: false
        }
    },
    created(){
        this.$store.dispatch('setTableAction');
        this.codigo = this.$store.state.table.codigo;
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
        }
    },
    components:{
        BlackCard,
        WhiteCards
    }
}
</script>

<style>
    .dropdown-trigger button {
        min-width: 12rem;
    }

    a.dropdown-item {
        padding-right: 1rem;
        text-align: center;
    }
</style>