import {RouteInfo} from './sidebar.metadata';

export const ROUTES: RouteInfo[] = [
  {path: 'dashboard', title: 'Dashboard', icon: 'dashboard', className: '', roles: ['ROLE_USER', 'ROLE_ADMIN']},
  {path: 'user-profile', title: 'User Profile', icon: 'person', className: '', roles: ['ROLE_USER', 'ROLE_ADMIN']},
  {path: 'teams', title: 'Team List', icon: 'groups', className: '', roles: ['ROLE_ADMIN']},
  {path: 'users', title: 'Employee List', icon: 'people', className: '', roles: ['ROLE_ADMIN']},
  {path: 'typography', title: 'Typography', icon: 'library_books', className: '', roles: ['ROLE_ADMIN']},
  {path: 'icons', title: 'Icons', icon: 'bubble_chart', className: '', roles: ['ROLE_ADMIN']},
  {path: 'maps', title: 'Maps', icon: 'location_on', className: '', roles: ['ROLE_ADMIN']},
  {path: 'notifications', title: 'Notifications', icon: 'notifications', className: '', roles: ['ROLE_ADMIN']}
];
