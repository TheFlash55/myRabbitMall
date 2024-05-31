import { getCategoryAPI } from "@/apis/layout";

export const useCategoryStore = defineStore("category", () => {
  const categoryList = ref([]);
  const getCategory = async () => {
    let res = await getCategoryAPI();
    categoryList.value = res.result;
    console.log("categoryList", categoryList.value);
  };
  onMounted(() => getCategory());
  return { categoryList, getCategory };
});
