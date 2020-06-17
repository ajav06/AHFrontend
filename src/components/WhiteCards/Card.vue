<template>
    <div>
        <div class="card card-white">
            <div class="card-content">
                <p class="has-text-centered">
                    {{ item.card }}
                </p>
            </div>
        </div>
        <br>
        <h5 class="subtitle is-5 has-text-centered has-text-black">
            {{ item.name }}
        </h5>
    </div>
</template>

<script>
    export default {
        name: 'WhiteCard',
        props:['item']
        /* created() {
            axios
                .get('https://caracas-against-humanity.herokuapp.com/api/answer')
                .then(response => (this.info = response.data))
                .catch(error => console.log(error))
        } */
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