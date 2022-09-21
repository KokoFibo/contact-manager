import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import ContactManager from '../views/ContactManager.vue';
import AddContact from '../views/AddContact.vue';
import ViewContact from '../views/ViewContact.vue';
import EditContact from '../views/EditContact.vue';
import PageNotFound from '../views/PageNotFound.vue';
import DeleteContact from '../views/DeleteContact.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    redirect: '/contacts',
    component: HomeView,
  },
  {
    path: '/contacts',
    name: 'ContactManager',
    component: ContactManager,
  },
  {
    path: '/contacts/add',
    name: 'AddContact',
    component: AddContact,
  },
  {
    path: '/contacts/view/:contactId',
    name: 'ViewContact',
    component: ViewContact,
  },
  {
    path: '/contacts/edit/:contactId',
    name: 'EditContact',
    component: EditContact,
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'PageNotFound',
    component: PageNotFound,
  },
  {
    path: '/contacts/delete/:contactId',
    name: 'DeleteContact',
    component: DeleteContact,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
