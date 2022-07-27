import { createRouter, createWebHistory } from 'vue-router';
import TheHome from './pages/TheHome';
import MyProjects from './pages/MyProjects';
import AboutMe from './pages/AboutMe';
import MyPhoto from './pages/MyPhoto';
import MyVideo from './pages/MyVideo';
import Project1 from './pages/Project1';
import Project2 from './pages/Project2';
import Project3 from './pages/Project3';
import Project4 from './pages/Project4';
import Project5 from './pages/Project5';
import NotFound from './pages/NotFound';
import DatenSchutz from './pages/DatenSchutz';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/portfolio', redirect: '/home' },
    { path: '/home', component: TheHome },

    {
      path: '/projects',
      component: MyProjects,
      redirect: '/projects/photo',
      children: [
        {
          path: '/projects/photo',
          component: MyPhoto,
          children: [
            { path: '/projects/photo/project1', component: Project1 },
            { path: '/projects/photo/project2', component: Project2 },
            { path: '/projects/photo/project3', component: Project3 },
          ],
        },
        {
          path: '/projects/video',
          component: MyVideo,
          children: [
            { path: '/projects/video/project4', component: Project4 },
            { path: '/projects/video/project5', component: Project5 },
          ],
        },
      ],
    },
    { path: '/about', component: AboutMe },
    { path: '/datenschutzerklaerung', component: DatenSchutz },
    { path: '/:notFound(.*)', component: NotFound },
  ],
});

export default router;
