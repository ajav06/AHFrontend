<template>
    <div class="columns is-centered">

        <div class="column is-3">
            <div id="card-black" class="card">
                <div class="card-content">
                    <p class="has-text-centered has-text-white">
                        {{info}}
                    </p>
                </div>
            </div>
        </div>
        
    </div>
</template>

<script>
export default {
    name: 'CardBlack',
    data(){
        return {
            info: 'Luego de desmayarme de la pea en Año Nuevo, me desperté con _____.'
        }
    },
    created(){
        axios
            .get('https://caracas-against-humanity.herokuapp.com/api/question')
            .then(response => (this.info = response.data))
            .catch(error => console.log(error))
    }
}
</script>

<style>
    #card-black {
        background: black;
        border: 1px solid white;
        border-radius: 1ex;
        min-height: 20ex;
    }
</style>