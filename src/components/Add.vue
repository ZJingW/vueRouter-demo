<template>
    <div>
        <!-- <h3>当前的count值为：{{this.$store.state.count }}</h3> -->
        <h3>{{this.$store.getters.shownum}}</h3>
        <button @click="btn" >+1</button>
         <button @click="btnN" >+N</button>
         <button @click="btn0" >+1 Async</button>
          <button @click="btn1" >+N Async</button>
        </div>
</template>

<script>
export default {
    data(){
        return{

        };
    },
    methods:{
        btn(){
            this.$store.commit('add')  //commit就是调用某个mutataion里面的函数
            
        },
        btnN(){
            this.$store.commit('addN',3)
        },
        //异步加1
        btn0(){
            //dispatch专门触发某个action
            this.$store.dispatch('addAsync')
        },
        //异步加N
        btn1(){
            this.$store.dispatch('addNAsync',5)
        }
        
    }
}
</script>