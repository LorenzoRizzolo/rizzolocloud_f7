
import HomePage from '../pages/home.svelte';
import NotFoundPage from '../pages/404.svelte';
import PageContatti from '../pages/contatti.svelte';
import OffertaPage from '../pages/offerta.svelte';

var routes = [
  {
    path: '/',
    name: 'home',
    icon: "home",
    component: HomePage,
  },
  {
    path: '/contatti/',
    name: 'contatti',
    icon: "mail",
    component: PageContatti,
  },
  {
    path: '/offerta/',
    name: 'la nostra offerta',
    icon: "groups",
    component: OffertaPage,
  },
  {
    path: '(.*)',
    name: 'not-found',
    icon: "error",
    component: NotFoundPage,
  },
];

export default routes;
