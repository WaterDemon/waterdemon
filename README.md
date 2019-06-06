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

线上链接：www.waterdemon.xyz
