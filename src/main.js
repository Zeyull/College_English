import Vue from 'vue'
import App from './App'
//网络请求
import {request} from "./utils/request";
vue.prototype.request = request;

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
  ...App
})
app.$mount()
