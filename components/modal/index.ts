import { App } from "vue";
import modal from "./modal.vue";

// 使用install方法，在app.use挂载
modal.install = (app: App) => {
  app.component(modal.__name as string, modal)
}
export default modal;