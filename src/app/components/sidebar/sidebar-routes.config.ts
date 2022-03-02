import {RouteInfo} from './sidebar.metadata';

export const ROUTES: RouteInfo[] = [
  {path: 'dashboard', title: 'Dashboard', icon: 'dashboard', className: '', roles: ['ROLE_USER', 'ROLE_ADMIN']},
  {path: 'user-profile', title: 'User Profile', icon: 'person', className: '', roles: ['ROLE_USER', 'ROLE_ADMIN']},
  {path: 'team-list', title: 'Team List', icon: 'groups', className: '', roles: ['ROLE_ADMIN']},
  {path: 'employee-list', title: 'Employee List', icon: 'people', className: '', roles: ['ROLE_ADMIN']},
  {path: 'typography', title: 'Typography', icon: 'library_books', className: '', roles: ['']},
  {path: 'icons', title: 'Icons', icon: 'bubble_chart', className: '', roles: ['']},
  {path: 'maps', title: 'Maps', icon: 'location_on', className: '', roles: ['']},
  {path: 'notifications', title: 'Notifications', icon: 'notifications', className: '', roles: ['']}
];
