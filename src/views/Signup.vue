<template>
    <div class="hero-body">
        <div class="container">
            <div class="columns is-centered">
                <div class="column is-5-tablet is-4-desktop is-3-widescreen">
                    <form action="" class="box">
                        <h5 class="title is-5 has-text-centered has-text-black">Ingrese sus datos</h5>

                        <div class="field">
                            <div class="control">
                                <input type="text" class="input" 
                                    placeholder="Nombre de Usuario"
                                    v-model="user.username" 
                                    required>
                            </div>
                            <div class="control">
                                <input type="password" class="input" 
                                    placeholder="Contraseña"
                                    v-model="user.password" 
                                    required>
                            </div>
                        </div>

                        <div class="field">
                            <div class="control">
                                <button class="button is-fullwidth is-success" 
                                    @click="register()" :disabled="verificarCampos">
                                    Registrarse
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                user: {
                    username: null,
                    password: null
                }
            }
        },
        computed: {
            verificarCampos(){
                if(this.user.username && this.user.password)
                    return false;
                return true;

            },
        },
        methods: {
            register() {
                this.$store.dispatch('registerAction', this.user);
                this.user.username = null;
                this.user.password = null;
            }
        }
    }
</script>
