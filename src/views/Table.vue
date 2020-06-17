<template>
    <div class="container">
        <h4 class="title is-4 has-text-centered">Código: {{codigo}}</h4>
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
            codigo: this.$store.state.table.codigo
        }
    },
    mounted (){
        this.codigo = this.$store.state.table.codigo
    },
    components:{
        BlackCard,
        WhiteCards
    }
}
</script>