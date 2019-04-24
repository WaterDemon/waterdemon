<template>
  <div id="itany">
    <el-row class="index-search">
      <el-col :span="5"></el-col>
      <el-col :span="14" style="position:relative;"><input type="text" class="search" v-model="keyword" @keyup="getData"><img src="../assets/icon-search.png" ></el-col>
      <el-col :span="5"></el-col>
    </el-row>
    <ul>
      <li v-for="(value,index) in myData" :class="{current:index==now}" @click="clickmes(value)" @keyup.40 @keyup.38 :key="value.id">
      {{index+1}}.{{value.name}}
      </li>
    </ul>
    <el-row>
      <el-col :span="24">
        <span v-if="ok">搜索后点击搜索列表</span>
        <audio :src='listmusic' v-if="see" controls="controls" autoplay="autoplay" loop="loop"></audio>
      </el-col>
    </el-row>
    <div class="leftList">
      <el-row>
        <el-col :span="24" v-for="(values,index) in musicId" :class="{current:index==now}" :key="values.id">
          <span>{{index+1}}.{{values.name}}</span>
          <span>{{values.ar[0].name}}</span>
          <button class="el-button el-button--primary" :data-id="values.id" @click="orr(values.id)">播放</button>
        </el-col>
      </el-row>
    </div>
    
    <!--<p v-show="myData.length==0">暂无数据....</p>-->
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'List',
  data () {
    return {
      msg: '',
      keyword: '',
      myData: [],
      now: -1,
      video: '',
      musicId: [],
      listmusic: '',
      listId: [],
      see: false,
      ok: true
    }
  },
  methods: {
    getData (e) {
      if (e.keyCode === 38 || e.keyCode === 40) return
      this.$http.jsonp('https://c.y.qq.com/splcloud/fcgi-bin/smartbox_new.fcg', {
        params: {
          is_xml: 0,
          format: 'jsonp',
          key: this.keyword,
          g_tk: 5381,
          loginUin: 0,
          hostUin: 0,
          inCharset: 'utf8',
          outCharset: 'utf-8',
          notice: 0,
          platform: 'yqq',
          needNewCode: 0
        },
        jsonp: 'jsonpCallback'
      }).then((result) => {
        if (result.data.code === 0) {
          var list = result.data.data.song.itemlist
          this.myData = list
        }
      })
    },
    clickmes (value) {
      this.keyword = value.name
      axios.get('https://api.imjad.cn/cloudmusic/', {
        params: {
          'type': 'search',
          's': this.keyword
        }
      }).then((result) => {
        var musicId = result.data.result.songs
        this.musicId = musicId
        let list = []
        for (var i = 0; i < musicId.length; i++) {
          list.push(musicId[i].id)
        }
        this.listId = list
        this.ok = false
      })
    },
    orr (id) {
      axios.get('https://api.imjad.cn/cloudmusic/', {
        params: {
          'type': 'song',
          'id': id,
          'br': 128000
        }
      }).then((result) => {
        this.listmusic = result.data.data[0].url
        this.see = true
      })
    }
  }
}
</script>
<style>
.current{
      background-color:#ccc;
    }
.search{width:100%;border:1px solid #3097ea;border-radius: 5px;height:30px;display: block;}
.index-search div{height: 30px;}
.index-search img{width:30px;height:30px;position:absolute;top:3px;right:5%;}
.SearchList{padding:0;}
.SearchList,.SearchList li{list-style: none;}
.SearchList li{text-align: left;line-height: 30px;}
ul{list-style: none}
ul,li{list-style:none;}
.leftList button{float:right;margin-right:30%;line-height:40px;width:80px;}
.leftList div{line-height:40px;border-bottom:1px solid #ddd;}
</style>
