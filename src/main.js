import App from "./App";
import { createApp } from "vue";
import router from "@/router/router";
import directives from "@/directives";
import components from "@/components/UI";

const app = createApp(App);

components.forEach((component) => {
  app.component(component.name, component);
});
directives.forEach((directive) => {
  app.directive(directive.name, directive);
});

app.use(router).mount("#app");
