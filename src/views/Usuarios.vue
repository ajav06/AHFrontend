<template>
    <div class="container">
        <h1 class="title">Información de Usuario</h1>

        <router-link v-for="(item,index) of ArregloUsuarios" 
                    :to="{ name:'usuarios', params:{id: item} }" 
                    :key="index">
            <button class="button">{{ item }}</button>
        </router-link>
        <usuario/>
    </div>
</template>

<script>
import Usuario from '@/components/Usuario'

export default {
    components:{
        Usuario
    },
    data(){
        return{
            ArregloUsuarios:['ajav06', 'scorpion06', 'marlessa', 'ileyna']
        }
    }
}
</script>