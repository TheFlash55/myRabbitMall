import httpInstance from "@/utils/http";

/**
 * @description: 获取最新的购物车列表
 * @param {*}
 * @return {*}
 */
export function findNewCartListAPI() {
  return httpInstance.get("/member/cart");
}

/**
 * @description: 根据sku对象进行新增购物车
 * @param {sku} 用户对象
 * @return {*}
 */
export function insertCartAPI(sku) {
  return httpInstance.post("/member/cart", sku);
}
/**
 * @description: 根据ids删除购物车
 * @param {*}
 * @return {*}
 */
export const delCartAPI = (ids) => {
  return httpInstance.delete("/member/cart", { data: { ids } });
};
//合并购物车
export function mergeCartAPI(data) {
  return httpInstance.post("/member/cart/merge", data);
}
//修改购物项
export function updateCartItem(skuId, data) {
  return httpInstance.put(`/member/cart/${skuId}`, data);
}
