<template>
    <div class="container">
        <div class="cover">
            <div class="column is-12">
                <h3 class="title is-3">Productos</h3>
            </div>

            <div class="columns is-multiline">

                <div class="column is-3 is-narrow">
                    <div class="column is-12">
                        <figure class="image">
                            <img src="http://placehold.it/200x100/000" alt="">
                        </figure>
                    </div>
                    <div class="column is-12 has-text-centered">
                        <h4 class="title is-4">Tiulo Producto 1</h4>
                        <p>Descripción del producto</p>
                        <br>
                        <router-link class="button is-success" 
                            :to="{ name:'producto', params:{id:1} }">Ver Detalle</router-link>
                    </div>
                </div>

                <div class="column is-3 is-narrow">
                    <div class="column is-12">
                        <figure class="image">
                            <img src="http://placehold.it/200x100/000" alt="">
                        </figure>
                    </div>
                    <div class="column is-12 has-text-centered">
                        <h4 class="title is-4">Tiulo Producto 2</h4>
                        <p>Descripción del producto</p>
                        <br>
                        <router-link class="button is-success" 
                            :to="{ name:'producto', params:{id:2} }">Ver Detalle</router-link>
                    </div>
                </div>

                <div class="column is-3 is-narrow">
                    <div class="column is-12">
                        <figure class="image">
                            <img src="http://placehold.it/200x100/000" alt="">
                        </figure>
                    </div>
                    <div class="column is-12 has-text-centered">
                        <h4 class="title is-4">Tiulo Producto 3</h4>
                        <p>Descripción del producto</p>
                        <br>
                        <router-link class="button is-success" 
                            :to="{ name:'producto', params:{id:3} }">Ver Detalle</router-link>
                    </div>
                </div>

                <div class="column is-3 is-narrow">
                    <div class="column is-12">
                        <figure class="image">
                            <img src="http://placehold.it/200x100/000" alt="">
                        </figure>
                    </div>
                    <div class="column is-12 has-text-centered">
                        <h4 class="title is-4">Tiulo Producto 4</h4>
                        <p>Descripción del producto</p>
                        <br>
                        <router-link class="button is-success" 
                            :to="{ name:'producto', params:{id:4} }">Ver Detalle</router-link>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<style>
    .cover {
        padding: 20px;
        margin: 40px 2px;
        border: 1px solid #D2E0E6;
    }
</style>