<template>
    <div class="container">
        <player-cards/>
    </div>
</template>

<script>
import PlayerCards from '../components/PlayerCards/Cards'

export default {
    name: 'Player',
    components:{
        PlayerCards
    }
}
</script>