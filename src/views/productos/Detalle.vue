<template>
    <div class="container">
        <div class="cover">
            <div class="column is-12">
                <h3 class="title is-3 has-text-centered">Detalle de Producto</h3>
            </div>

            <div class="columns is-multiline">

                <div class="column is-2 is-narrow">
                </div>

                <div class="column is-8 is-narrow">
                    <div class="column is-12">
                        <figure class="image img-section">
                            <img src="http://placehold.it/200x100/000" alt="">
                        </figure>
                    </div>
                    <div class="column is-12 has-text-centered">
                        <h4 class="title is-4">Tiulo Producto {{ id }}</h4>
                        <p>Descripción del producto</p>
                        <br>
                        <a href="" class="button is-success">Agregregar al carro</a>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                id: this.$route.params.id
            }
        }
    }
</script>

<style>
    .cover {
        padding: 20px;
        margin: 40px 2px;
        border: 1px solid #D2E0E6;
    }
</style>