import { useIntersectionObserver } from "@vueuse/core";

export const lazyPlugin = {
  install(app) {
    app.directive("img-lazy", {
      //全局自定义指令
      //el:指令绑定元素 img
      //binding:binding.value 指令=后面表达式的值 图片url
      mounted(el, binding) {
        // console.log(el, binding.value);
        const { stop } = useIntersectionObserver(el, ([{ isIntersecting }]) => {
          if (isIntersecting) {
            el.src = binding.value;
            stop();
          }
        });
      },
    });
  },
};
