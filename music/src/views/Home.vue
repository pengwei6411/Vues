<!--
 * @Author: your name
 * @Date: 2020-04-10 11:15:26
 * @LastEditTime: 2020-04-11 12:20:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vscodesc:\Users\xswl\Desktop\VUEX (2)\music\src\views\Home.vue
 -->
<template>
  <div class="home">
      <mt-search v-model="value" @keyup.enter.native="con" style="height:50px;"></mt-search>
      <!--视图切换-->
      <div class="listx">
        <ul>
          <li>
            <router-link to='/'>
              <p><img src='./../assets/经理.png' /><span>歌手</span></p>
            </router-link>
          </li>
           <li>
            <router-link to='/'>
              <p><img src='./../assets/排行榜.png' /><span>排行榜</span></p>
            </router-link>
          </li>
           <li>
            <router-link to='/'>
              <p><img src='./../assets/电台.png' /><span>电台</span></p>
            </router-link>
          </li>
        </ul>
      </div>

      <div class="conster">

        <div class="list">
          <ul>
            <li v-for="item in this.playlists" :key="item.id">
              <router-link :to="{name:'playlists',params:{id:item.id}}">
                <img :src="item.coverImgUrl" />
              </router-link>
              <p>{{item.name}}</p>
            </li>           
          </ul>  
        </div>  
      </div>      
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  data:()=>({
    value:'',
    copywriter:'',
    playlists:[]
  }),
  methods:{
    con(){
      console.log(this.value);
    }
  },
  created(){
    this.$axios.get('https://autumnfish.cn/top/playlist/highquality?before=1503639064232&limit=15')
    .then(res => {
      console.log(res.data.playlists);
      this.playlists=res.data.playlists;
    })
    .catch(err => {
      console.error("获取失败"); 
    })
  }
}
</script>
<style scoped>
.listx{
  width:100%;
  height: 100%;
  margin-top:30px;
}
.listx ul{
  display: flex;
  flex-wrap: wrap;
}
.listx ul li{
  text-align: center;
  width: 33%;
  height:100%;
  list-style: none;
}
.listx ul li a{
  text-decoration: none;
  color: black;
 
  width: 40px;
}
.listx ul li a img{
  width:40px;
}
.conster{
  width: 100%;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 130px;
}
.conster h3{
  color: #55a772;
}
.list{
  margin-top:30px;
  width:100%;
  height: 100%;
}
.list ul {
  display: flex;
  flex-wrap: wrap;
}
.list ul li{
  width: 33%;
  height: 100%;
  text-align: center;
  font-size: 12px;
  list-style: none;
}
.list ul li a{
  display: inline-block;
  width:80px;
  height: 50px;
  margin: 0px auto;
}
.list ul li a img{
  width: 80px;
}
</style>