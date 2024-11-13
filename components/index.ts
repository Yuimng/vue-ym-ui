import { App } from "vue";

// 使用 Ym作为组件别名前缀
import YmButton from "./button";
import YmModal from "./modal";

const components = {
  YmButton,
  YmModal,
};

// 组件挂载
const install = (app: App) => {
  Object.entries(components).forEach(([key, value]) => {
    app.component(key, value);
  });
};

export default {
  install,
};
