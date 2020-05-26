<template>
    <div class="hero-body">
        <div class="container">
            <div class="column is-5-tablet is-4-desktop is-3-widescreen is-offset-4">
                <form action="" class="box">
                    <h2 class="title is-3 has-text-centered">Ingrese sus datos</h2>

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
                                Registrarse
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<style>
    @media screen and (min-width: 769px), print
    {
        .column.is-offset-4 {
            margin-left: 37.8%;
        }
    }
</style>