import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import ColbyPage from '@/components/ColbyPage';
import NotFoundComponent from '@/components/NotFoundComponent';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld,
    },
    {
      path: '/colby',
      name: 'Colby',
      component: ColbyPage,
    },
    {
      path: '*',
      component: NotFoundComponent,
    },
  ],
});
