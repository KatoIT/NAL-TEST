import {RouteInfo} from './sidebar.metadata';

export const ROUTES: RouteInfo[] = [
  {path: 'dashboard', title: 'Dashboard', icon: 'dashboard', className: '', roles: ['ROLE_ANONYMOUS']},
  {path: 'user-profile', title: 'User Profile', icon: 'person', className: '', roles: ['ROLE_USER', 'ROLE_ADMIN']},
  {path: 'teams', title: 'Team List', icon: 'groups', className: '', roles: ['ROLE_ADMIN']},
  {path: 'employees', title: 'Employee List', icon: 'people', className: '', roles: ['ROLE_ADMIN']},
  {path: 'typography', title: 'Typography', icon: 'library_books', className: '', roles: ['ROLE_ANONYMOUS']},
  {path: 'icons', title: 'Icons', icon: 'bubble_chart', className: '', roles: ['ROLE_ANONYMOUS']},
  {path: 'maps', title: 'Maps', icon: 'location_on', className: '', roles: ['ROLE_ANONYMOUS']},
  {path: 'notifications', title: 'Notifications', icon: 'notifications', className: '', roles: ['ROLE_ANONYMOUS']}
];
