<!--
 * @Author: your name
 * @Date: 2020-04-12 11:11:52
 * @LastEditTime: 2020-04-12 11:44:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vscodesc:\Users\xswl\Desktop\VUEX (2)\music\src\views\ranking.vue
 -->
<template>
  <div>
      <headx :title="title"></headx>
        
        <div class="heads">
            <h3 @click="getrouter()" style="font-size:18px" icon="back"><img src="../../src/assets/返回.png" style="width:25px"></h3>
            <h3 class="title">{{title}}</h3>
        </div>

        <div class="conter" >
            <router-link :to="{name:'models',params:{id:item.id}}" v-for="(item,index) in music" :key="index">
                <p>
                    <span><img :src='item.img1v1Url' style="width:60px"/></span>
                    <span class="text">{{item.name}}</span>
                </p>
            </router-link>
        </div>
  </div>
</template>

<script>
import headx from '../components/heads.vue';
export default {
name:'ranking',
data:()=>({
    title:'歌手排行榜',
    music:[]
}),
components:{
    headx
},
methods:{
    getrouter(){
        this.$router.go(-1);
    }
},
created(){
    this.$axios.get('https://autumnfish.cn/toplist/artist')
    .then(res => {
        console.log(res.data.list.artists);
        this.music=res.data.list.artists;
    })
    .catch(err => {
        console.error(err); 
    })
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
.conter{
    width:100%;
    height:100%;
    margin-bottom: 110px;
}
.conter a{
    text-decoration: none;
}
.conter a p{
    width: 100%;
    height:100%;
    display: flex;
    flex-wrap: wrap;
}
.conter a p span{
    width:50%;
    height:100%;
}
.text{
    margin-top: 15px;
}
</style>