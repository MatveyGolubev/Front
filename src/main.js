import './assets/main.css'
import PrimeVue from "primevue/config";
import Lara from "./lara";
import Calendar from "primevue/calendar";
import Password from "primevue/password";
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import {createApp, ref} from 'vue'
import {createPinia} from 'pinia'
import App from './App.vue'
import router from './router'



const app = createApp(App)
const checked = ref(false);
app.component("Calendar", Calendar);
app.component("Password", Password);
app.component("InputText", InputText);
app.component("Button", Button);
app.use(createPinia())
app.use(router)
app.use(PrimeVue, {unstyled: true, pt: Lara});
app.mount("#app");
