<!--
 * @Author: your name
 * @Date: 2020-04-10 21:40:55
 * @LastEditTime: 2020-04-13 20:08:33
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vscodesc:\Users\xswl\Desktop\VUEX (2)\music\src\views\playlists.vue
 -->
<template>
  <div>
      <heads :title="title"></heads>
      
      
      <div class="heads">
            <h3 @click="getrouter()" style="font-size:18px" icon="back"><img src="../../src/assets/返回.png" style="width:25px"></h3>
            <h3 class="title">{{title}}</h3>
      </div>
      
       <div class="txlang">
            <div>
                <img src="../assets/音乐.png" >
            </div>
              <div style="width:50%">
                  <h1 style="margin-top:30px;">
                      推荐你的歌单
                  </h1>
                  <p style="margin-top:30px;">
                      每一首歌都有一个故事，让人沉醉其中，
                      希望你可以听到感同身受的歌曲
                  </p>
                  <p></p>
              </div>
          </div>
        <div class="music">
            <h3 style="text-align:center;width:100%;color:#31c27c">歌单列表</h3>
            <ul>
                <li  v-for="(item,index) in this.mus " :key="index"  @click="geturls(item.id)">
                    <p>
                    <span >{{index+1}}</span>
                        <span><img src="../assets/心 爱心.png" style="width:40px"></span>
                        <span> {{item.name}}</span>
                    </p>
                </li>
            </ul>
        </div>
        <audio ref='audio' autoplay='autoplay' :src="musicurl" ></audio>
  </div>
</template>

<script>
import heads from '../components/heads.vue';
export default {
    name:'playlists',
    data:()=>({
        title:'歌单内容',
        mus:[],
        musicurl:""
    }),
    methods:{
      getrouter(){
          this.$router.go(-1)
      },
      geturls(id){
          //播放音乐
          this.$axios.get('https://autumnfish.cn/song/url?id='+id)
          .then((res)=>{
              console.log(res.data.data[0].url);
                let url=res.data.data[0].url;
              if(url==null){
                  window.alert("万分抱歉，这首歌暂无版权,我们会尽快补充,请原谅")
              }else{
                    this.musicurl=res.data.data[0].url;
                    window.localStorage.setItem('url',res.data.data[0].url);
              }
          }).catch((err)=>{
              console.error("歌曲url获取失败");
              window.alert("获取失败");
          })
      },
      play(){
           this.isPlay = true
          // 清空mv的信息
          this.musicurl= ''
      }
    },
    created(){
        //加载歌曲
      this.$axios.get('https://autumnfish.cn/playlist/detail?id='+this.$route.params.id)
      .then(res => {
          console.log(res.data.playlist.tracks)
         this.mus=res.data.playlist.tracks;
      })
      .catch(err => {
          console.error(err); 
      }),
      this.musicurl=window.localStorage.getItem('url');
    },
    components:{
        heads
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
.txlang{
   width: 100%;
  display: flex;
}
.txlang div{
    height:220px;
    float: left;
    width:50%;
}
.txlang div img{
    width:200px
}
.music{
    
    width:100%;
    margin-bottom:100px;
}
.music ul{
    margin-top:30px;
}
.music li{
    list-style: none;
}
.music ul li :hover{
    background-color:rgba(131, 127, 134, 0.13);
}
.music li p{
    border:1px solid red;
    width:100%;
    display: flex;
    flex-wrap: wrap;
}
.music li p span{
    width:33%;
    height:100%;
    padding-top:10px;
}
</style>
