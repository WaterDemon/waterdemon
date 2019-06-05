<template>
  <div class="hengtai">
    <router-link to='/List'>
      <el-row class="index-search">
        <el-col :span="5"></el-col>
        <el-col :span="14" style="position:relative;"><input type="text" class="search"><img src="../assets/icon-search.png" ></el-col>
        <el-col :span="5"></el-col>
      </el-row>
    </router-link>
    
    <Head/>
    <div v-show="ok"></div>
  </div>
</template>

<script>
import List from '@/page/List'
import Head from '../components/Head'

export default {
  name: 'HengTai',
  components: {
    List,
    Head
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      url: '',
      ok: false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.current{
      background-color:#ccc;
    }
.search{width:100%;border:1px solid #3097ea;border-radius: 5px;height:30px;display: block;}
.index-search div{height: 30px;}
.index-search img{width:30px;height:30px;position:absolute;top:3px;right:5%;}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.hengtai{
  width:100%;
  height:100%;
}
.el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }
  .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  }
</style>
