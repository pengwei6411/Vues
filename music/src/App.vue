<!--
 * @Author: your name
 * @Date: 2020-04-10 11:15:26
 * @LastEditTime: 2020-04-11 14:57:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vscodesc:\Users\xswl\Desktop\VUEX (2)\music\src\App.vue
 -->
<template>
  <div id="app">
    
   <heads :title="title">
     <slot>
        
     </slot>
   </heads>

    <router-view/>
    <audio ref='audio' autoplay='autoplay' :src="musicurl" @play="play"></audio>
    <mt-tabbar v-model="selected" >
       
      <div style='width:60%'>
        <img src="../../music/src/assets/qq音乐.png" style="width:50px;float:left">
      </div>
      <div class="fode">
        <img src="../src/assets/播放 (1).png" @click="stop()">
      </div>
      <div class="fode">
        <img src="../src/assets/播放列表.png">
      </div>
    </mt-tabbar>
  </div>
</template>
<script>
import heads from '../src/components/heads.vue';
export default {
  name:'app',
  data:()=>({
    value:'',
    selected:'',
    title:'音乐馆',
    musicurl:'',
    isplay:true
  }),
  components:{
    heads
  },
  methods:{
    stop(){
        this.play();
        console.log('123123');
    },
    play() {
          this.isPlay = true
          // 清空mv的信息
          this.musicurl = ''
        }
  }
}
</script>
<style>
*{
  padding: 0px;
  margin:0px;
}
.fode{
 width:15%;
}
.fode img{
  width: 35px;
  position: relative;
  top:20%;
}
html{
  width:100%;
  height:100%;
  overflow:hidden;
}
body{
  padding-top: 40px;
  width:100%;
  height: 100%;
  overflow: auto;

}
</style>
