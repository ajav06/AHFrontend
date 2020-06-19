<template>
    <div class="container">
        <div class="columns is-centered">
            <div class="column is-5-tablet is-4-desktop is-3-widescreen">
                <form action="" class="box">

                    <figure class="image">
                        <img src="../assets/logo.png" alt="Logo Against Humanity Vzla">
                    </figure>

                    <br>

                    <h5 class="subtitle is-5 has-text-centered has-text-grey-dark">Inicie sesión</h5>

                    <div class="field">
                        <div class="control">
                            <input type="text" class="input" 
                                placeholder="Nombre de Usuario" 
                                v-model="user.username">
                        </div>
                        <div class="control">
                            <input type="password" class="input" 
                                placeholder="Contraseña" 
                                v-model="user.password">
                        </div>
                    </div>
                    <!-- 

                    <div class="field">
                        <div class="control">
                            <label class="checkbox">
                                <input type="checkbox">
                                Remember me
                            </label>
                        </div>
                    </div> -->

                    <div class="field">
                        <div class="control">
                            <button 
                                class="button is-fullwidth is-success" 
                                @click="loginA()"
                                :disabled="camposVacios">
                                Iniciar Sesión
                            </button>
                        </div>
                    </div>

                    <button class="button is-info is-fullwidth" @click="signup()">Registrarse</button>

                </form>
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
            camposVacios() {
                if (this.user.username && this.user.password)
                    return false;

                return true;
            }
        },
        methods: {
            loginA() {
                this.$store.dispatch('loginAction', this.user);
                this.user.username = null;
                this.user.password = null;
            },
            signup() {
                this.$router.push('/registrase');
            }
        }
    }
</script>