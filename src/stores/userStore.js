import { loginAPI } from "@/apis/user";
import { defineStore } from "pinia";

export const useUserStore = defineStore(
  "user",
  () => {
    //1.定义管理用户数据的state
    const userInfo = ref({});
    //2.定义获取用户数据的action函数
    const getUserInfo = async (user) => {
      const res = await loginAPI(user);
      userInfo.value = res.result;
    };
    //退出时清空用户数据
    const clearUserInfo = () => {
      userInfo.value = {};
    };
    //3.把state和action都返回
    return {
      userInfo,
      getUserInfo,
      clearUserInfo,
    };
  },
  {
    persist: true,
  }
);
