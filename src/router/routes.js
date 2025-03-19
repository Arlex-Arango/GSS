const requireAuth = (to, from, next) => {
  const user = localStorage.getItem('user');
  if (!user) {
    next('/login'); // Redirigir si no ha iniciado sesión
  } else {
    next(); // Permitir el acceso
  }
};

const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: 'login', component: () => import('pages/LoginGSS.vue') },
      { path: 'dashboard', component: () => import('pages/UserDashboard.vue'), beforeEnter: requireAuth }
    ]
  },


  { path: '/login', component: () => import('pages/LoginGSS.vue') },


  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
];

export default routes;
