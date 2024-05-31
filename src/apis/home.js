import httpInstance from "@/utils/http";

/**
 * @description:获取轮播图
 * @returns
 */

export function getBannerAPI(distributionSite = "1") {
  return httpInstance.get("/home/banner", { params: { distributionSite } });
}

/**
 * @description:获取新鲜好物
 * @returns
 */

export function getNewAPI() {
  return httpInstance.get("/home/new");
}

/**
 * @description: 获取人气推荐
 * @param {*}
 * @return {*}
 */
export const getHotAPI = () => {
  return httpInstance.get("/home/hot");
};

/**
 * @description: 获取产品列表
 * @param {*}
 * @return {*}
 */
export const getGoodsAPI = () => {
  return httpInstance.get("/home/goods");
};
