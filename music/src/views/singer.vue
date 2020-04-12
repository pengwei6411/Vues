<!--
 * @Author: your name
 * @Date: 2020-04-11 20:34:54
 * @LastEditTime: 2020-04-12 11:25:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vscodesc:\Users\xswl\Desktop\VUEX (2)\music\src\views\singer.vue
 -->
<template>
  <div>
      <headxs :title="title"></headxs>
      
      <div class="heads">
            <h3 @click="getrouter()" style="font-size:18px" icon="back"><img src="../../src/assets/返回.png" style="width:25px"></h3>
            <h3 class="title">{{title}}</h3>
      </div>




    <mt-navbar class="page-part" v-model="selected">
      <mt-tab-item id="1">国内歌手</mt-tab-item>
      <mt-tab-item id="2">国外歌手</mt-tab-item>
    </mt-navbar>
 
    <div>
      <mt-cell class="page-part" title="歌手排行榜不分先后"></mt-cell>
    </div>
 
	<!-- tabcontainer -->
    <mt-tab-container v-model="selected" class="conset">
      <mt-tab-container-item id="1">
       <router-link :to="{name:'models',params:{id:item.id}}" v-for='(item,index) in this.china' :key="index" class="listsd">
         <p>
           <span><img :src="item.img1v1Url" style="width:50px"></span>
           <span >{{item.name}}</span>
         </p>
       </router-link>
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
       <router-link :to="{name:'models',params:{id:item.id}}" v-for='(item,index) in this.foreign' :key="index" class="listsd">
         <p>
           <span><img :src="item.img1v1Url" style="width:50px"></span>
           <span >{{item.name}}</span>
         </p>
       </router-link>
      </mt-tab-container-item>

    </mt-tab-container>
  </div>
</template>

<script>
import headxs from '../components/heads.vue';
export default {
name:'singx',
data:()=>({
    selected:'1',
    title:'歌手分类',
    china:[],
    foreign:[]
}),
components:{
    headxs
},
created(){
    this.$axios.get('https://autumnfish.cn/artist/list')
    .then(res => {
      console.log(res.data.artists);
      this.china=res.data.artists;
    })
    .catch(err => {
      console.error(err); 
    });
    this.$axios.get('https://autumnfish.cn/artist/list?type=1&area=96&initial=b')
    .then(res => {
      console.log(res.data.artists);
      this.foreign=res.data.artists;
    })
    .catch(err => {
      console.error(err); 
    })
},methods:{
  getrouter(){
    this.$router.go(-1);
  }
}
}
</script>

<style>
.heads{
    width:100%;
    height:40px;
    line-height: 40px;
}
h3{
    float: left;
}
.title{
    position: relative;
    width: 200px;
    height: 40px;
    left: 50%;
    margin-left: -130px;
    text-align: center;
}
.listsd{
  text-decoration: none;
  width:100%;
  height: 50px;
}
.listsd p{
  display: flex;
  flex-wrap: wrap;
}
.listsd p span{
  display: block;
  width:50%;
  height: 100%;
}
.conset{
  margin-bottom: 100px;
}
</style>