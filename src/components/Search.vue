<template>
  <div id="itany">
    <list/>
  </div>
</template>

<script>
import List from '@/page/List'

export default {
  name: 'Search',
  components: {
    List
  },
  data () {
    return {
      msg: '',
      keyword: '',
      myData: [],
      now: -1
    }
  },
  methods: {

  }
}
</script>
<style>
body{background:#fff;padding:10px;margin:0;}
.current{
      background-color:#ccc;
    }
.search{width:100%;border:1px solid #3097ea;border-radius: 5px;height:30px;display: block;}
.index-search div{height: 30px;}
.index-search img{width:30px;height:30px;position:absolute;top:3px;right:5%;}
.SearchList{padding:0;}
.SearchList,.SearchList li{list-style: none;}
.SearchList li{text-align: left;line-height: 30px;}
</style>
