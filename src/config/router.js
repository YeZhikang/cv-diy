import { History } from '../pages/History/index';
import { Edit } from '../pages/Edit/index';
import { Index } from '../pages/Index/index';

export const mapRoutes = {
  HISTORY: '/history',
  EDIT: '/edit',
  INDEX: '/',
};

export const routes = [
  {
    name: 'history',
    component: History,
    path: '/history',
  },
  {
    name: 'index',
    component: Index,
    path: '/',
  },
  {
    name: 'edit',
    component: Edit,
    path: '/edit',
  },
];
