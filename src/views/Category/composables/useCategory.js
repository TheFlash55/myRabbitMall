import { getTopCategoryAPI } from "@/apis/category";
import { onBeforeRouteUpdate, useRoute } from "vue-router";

export function useCategory() {
  const categoryData = ref({});
  const route = useRoute();
  //分类数据的获取
  const getCategory = async (id) => {
    const { result } = await getTopCategoryAPI(id);
    categoryData.value = result;
    console.log("categoryData", result);
  };
  onMounted(() => getCategory(route.params.id));

  onBeforeRouteUpdate((to) => {
    getCategory(to.params.id);
  });
  return {
    categoryData,
  };
}
