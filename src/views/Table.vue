<template>
    <div class="container">
        <card-black/>
        <cards-white/>
    </div>
</template>

<script>
import CardBlack from '../components/CardBlack';
import CardsWhite from '../components/CardsWhite/Cards'

export default {
    name: 'Table',
    components:{
        CardBlack,
        CardsWhite
    }
}
</script>