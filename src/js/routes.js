
import HomePage from '../pages/home.svelte';
import NotFoundPage from '../pages/404.svelte';


var routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage,
  },
  {
    path: '(.*)',
    name: 'not-found',
    component: NotFoundPage,
  },
];

export default routes;
