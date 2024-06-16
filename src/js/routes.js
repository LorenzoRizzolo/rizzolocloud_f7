
import HomePage from '../pages/home.svelte';
import NotFoundPage from '../pages/404.svelte';
import PageContatti from '../pages/contatti.svelte';

var routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage,
  },
  {
    path: '/contatti/',
    name: 'contatti',
    component: PageContatti,
  },
  {
    path: '(.*)',
    name: 'not-found',
    component: NotFoundPage,
  },
];

export default routes;
