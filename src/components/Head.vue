<template lang="html">
  <el-row :gutter="20">
    <el-col :span="4"><div class="grid-content">{{msg}}</div></el-col>
    <el-col :span="12"><div class="grid-content"></div></el-col>
    <el-col :span="4"><div class="grid-content"></div></el-col>
  </el-row>
</template>

<script>
export default {
  name: 'Head',
  data () {
    return {
      msg: ''
    }
  },
  methods: {
  }
}
</script>

<style lang="css">

</style>
