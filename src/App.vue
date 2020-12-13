<template>
  <div>
    <!--3.shiyong-->
    
    <my-add></my-add>  
    <my-dec></my-dec>
  </div>
</template>

<script>
import  Add from "./components/Add.vue";  //1.导入组件
import Dec from "./components/Dec.vue";


export default {
  data(){
    return{

    }
  },
  components:{  //局部注册组件为App的子组件
    "my-add" :Add,
    "my-dec" :Dec
  
  }
  
};
</script>