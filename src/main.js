import { createApp } from 'vue';
import router from './router';

import TheSpinner from './components/layout/ui/TheSpinner';
import ProjectsFooter from './components/layout/ui/ProjectsFooter';

import App from './App';

const app = createApp(App);

app.use(router);

app.component('the-spinner', TheSpinner);
app.component('projects-footer', ProjectsFooter);

app.mount('#app');
