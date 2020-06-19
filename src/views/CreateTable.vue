<template>
    <div class="container">
        <div class="columns is-centered">
            <div class="column is-5-tablet is-4-desktop is-3-widescreen">
                <form action="" class="box">
                    <h5 class="subtitle is-5 has-text-centered has-text-grey-dark">Crear mesa de juego</h5>

                    <br/>

                    <div class="field">
                        <div class="control">
                            <button class="button is-fullwidth is-primary" @click="create()">
                                Crear
                            </button>
                        </div>
                    </div>

                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods:{
        create(){
            this.$store.dispatch('createTableAction');
        }
    }
}
</script>