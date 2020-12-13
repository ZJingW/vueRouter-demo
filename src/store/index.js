import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default  new Vuex.Store({
  state: {

    count:0
  },
  mutations: {  //修改Store里面的数据，不要直接操作Store里面的数据  集中管理
//不要再这里写异步的操作噢噢噢噢。不然vue-tool无法调式
    add(s){  //s就是传入上面state对象  自身的  s==state对象
      s.count++
    },
    addN(state,step){  //第一个参数永远是state对象
      state.count += step

    },
    dec(state){
      state.count--
    },
    decN(state,step){
      state.count-=step
    }

  },
  actions: { //只负责处理异步任务，但是再action中还是要出发mutations的方式来间接变更数据
    
    addAsync(context){
      setTimeout(()=>{  //再action中不能直接修改state里面的数据，借助mutatution。只有mutatution可以修改数据的
        context.commit('add')//commit触发对应的mutations里面的函数 因为不能直接修改state数据，只能通过mutatution简介修改
      },1000)
    },
    addNAsync(context,step){
      setTimeout(()=>{
        context.commit('addN',step)
      },1000)
    },
    decAsync(context){
      setTimeout(()=>{
        context.commit('dec')
      },1000)
    },
    decNAsync(context,step){
      setTimeout(()=>{
        context.commit('decN',step)
      },1000)
    }

  },

  //Getter不会修改Store里面的原数据，可s以对Sore数据进行加工处理形成新数据。新数据会响应式的改变
  getters:{
    shownum(state){
      return '我是新数据【'+ state.count+ '】' 
    }

  },

  modules: {
  }
})
