<template>
    <div class="hero-body">
        <div class="container">
            <div class="column is-5-tablet is-4-desktop is-3-widescreen is-offset-4">
                <form action="" class="box">
                    <h3 class="subtitle is-3 has-text-centered">Ingrese sus datos</h3>

                    <button class="button is-info is-fullwidth" @click="signup()">Registrarse</button>

                    <br/>

                    <div class="field">
                        <div class="control">
                            <input type="text" class="input" placeholder="Email Address">
                        </div>
                        <div class="control">
                            <input type="password" class="input" placeholder="Password">
                        </div>
                    </div>

                    <div class="field">
                        <div class="control">
                            <label class="checkbox">
                                <input type="checkbox">
                                Remember me
                            </label>
                        </div>
                    </div>

                    <div class="field">
                        <div class="control">
                            <button class="button is-fullwidth is-primary">
                                Login
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
        signup(){
            this.$router.push('/registrase');
        }
    }
}
</script>

<style>
    @media screen and (min-width: 769px), print
    {
        .column.is-offset-4 {
            margin-left: 37.8%;
        }
    }
</style>