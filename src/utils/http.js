import axios from "axios";
import { ElMessage } from "element-plus";
import "element-plus/theme-chalk/el-message.css";
const httpInstance = axios.create({
  baseURL: "http://pcapi-xiaotuxian-front-devtest.itheima.net",
  timeout: 5000,
});

//axios请求拦截器//一般会进行token身份验证等
httpInstance.interceptors.request.use(
  (config) => {
    return config;
  },
  (e) => Promise.reject(e)
);

//axios响应式拦截器//一般进行错误的统一提示，token失效的处理等
httpInstance.interceptors.response.use(
  (res) => res.data,
  (e) => {
    //统一进行错误提示
    ElMessage({
      type: "error",
      message: e.response.data.message,
    });
    return Promise.reject(e);
  }
);

export default httpInstance;
