import {RolePathMetadata} from './role-path.metadata';
import {environment} from "../../../environments/environment";

export const ROLE_PATH: RolePathMetadata[] = [
  {role: environment.role_admin, paths: ['']},
  {role: environment.role_user, paths: ['/home/dashboard','/home/user-profile',]},
  {role: environment.role_anonymous, paths: ['/home/dashboard',]},
];
