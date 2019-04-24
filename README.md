#water  demon

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

键盘方法@keydown.down="changeDown" @keydown.up.prevent="changeUp"
for (var i = 0; i < list.length; i++) {
            var str = list[i]
            JSON.stringify(str)
            console.log(list[i].name)
            this.myData += list[i].name
          }

          created () {
            this.request()
          },直接调取接口的方法
          ,
          changeDown (value) {
            this.now++
            this.keyword = this.myData.name[this.now]
            if (this.now === this.myData.length) {
              this.now = -1
            }
          },
          changeUp () {
            this.now--
            this.keyword = this.myData[this.now]
            if (this.now === -2) {
              this.now = this.myData.length - 1
            }
          }
上班闲着做的，无意中找到了网易云和qq音乐的接口，就想着对接一下试试， 刚开始是完成了播放一首指定音乐的功能，后来不满足，使用了qq音乐的搜索功能，然后把搜索到的音乐名称发送给网易云的接口上
做工粗糙，完全是因为公司不提倡使用vue，自己又想做一个才做的。
