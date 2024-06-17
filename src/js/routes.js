
import HomePage from '../pages/home.svelte';
import NotFoundPage from '../pages/404.svelte';
import PageContatti from '../pages/contatti.svelte';
import OffertaPage from '../pages/offerta.svelte';

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
    path: '/offerta/',
    name: 'la nostra offerta',
    component: OffertaPage,
  },
  {
    path: '(.*)',
    name: 'not-found',
    component: NotFoundPage,
  },
];

export default routes;
