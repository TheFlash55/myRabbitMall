import { loginAPI } from "@/apis/user";
import { defineStore } from "pinia";
import { useCartStore } from "./cartStore";
import { mergeCartAPI } from "@/apis/cart";

export const useUserStore = defineStore(
  "user",
  () => {
    //1.定义管理用户数据的state
    const userInfo = ref({});
    const cartStore = useCartStore();
    //2.定义获取用户数据的action函数
    const getUserInfo = async (user) => {
      const res = await loginAPI(user);
      userInfo.value = res.result;
      //合并购物车
      await mergeCartAPI(
        cartStore.cartList.map((item) => {
          return {
            skuId: item.skuId,
            selected: item.selected,
            count: item.count,
          };
        })
      );
      await cartStore.updateLoginCartList();
    };
    //退出时清空用户数据
    const clearUserInfo = () => {
      userInfo.value = {};
      cartStore.clearCart();
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
