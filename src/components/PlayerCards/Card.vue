<template>
    <div>
        <div class="card card-white">
            <div class="card-content">
                <p class="has-text-centered">
                    {{ item.card }}
                </p>
            </div>
        </div>
        <button class="button is-warning is-fullwidth">
            Lanzar
        </button>
    </div>
</template>

<script>
    export default {
        name: 'CurrentCard',
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