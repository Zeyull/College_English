import {request} from "./utils/request";
vue.prototype.request = request;

export default (params)=>{
    
    //加载中
    uni.showLoading({
        title:"加载中"
    })
    
    return new Promise((resolve,reject) =>{
        wx.request({
            ...params,
            success(res){
                resolve(res);
            },
            fail(err){
                reject(err);
            },
            complete(){
                uni.hideLoading();
            }
        })
    })
}

this.request({
    url:"url"
}).then(res=>{
    console.log(res);
})