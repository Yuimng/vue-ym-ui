import { App } from "vue";
import button from "./button.vue";

// 使用install方法，在app.use挂载
button.install = (app: App) => {
  app.component(button.__name as string, button)
}

export default button;
