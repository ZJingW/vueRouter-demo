<template>
    <div>
        <!-- <h3>当前的count值为：{{count}}</h3> -->
        <h3>{{shownum}}</h3>
        <button v-on:click="sub">-1</button>
         <button v-on:click="subN">-N</button>
         <button v-on:click="decAsync">-1 Async</button>
         <button v-on:click="decNAsync(3)">-N Async</button>
        </div>
</template>

<script>
import {mapState} from 'vuex'  //1
import {mapMutations} from 'vuex'
import {mapActions} from 'vuex'
import {mapGetters} from 'vuex'

export default {
    data(){
        return{

        };
    },
    computed:{ 
    ...mapState(['count']),  //把count变成计算属性    //2
    ...mapGetters(['shownum'])
    },

    methods:{
    ...mapMutations(['dec','decN']),
    sub(){
        this.dec()
    },
    subN(){
        this.decN(3)
    },

    ...mapActions(['decAsync','decNAsync']),
    // sub0(){
    //     this.decAsync()
    // },
    // sub1(){
    //     this.decNAsync()
    // }


    }

    
}
</script>