import { Router } from 'express';
import { AuthRoute } from '../modules/auth/auth.route';
import { MemberRoute } from '../modules/member/member.route';
import { AccountRoute } from '../modules/account/account.route';
import { UserRoute } from '../modules/user/user.route';
import { ProjectRoute } from '../modules/projects/projects.route';
import { TaskRoute } from '../modules/task/task.route';
import { WorkspaceRoute } from '../modules/workspace/workspace.route';

const router = Router();

const moduleRouters = [
  {
    path: '/auth',
    router: AuthRoute,
  },
  {
    path: '/account',
    router: AccountRoute,
  },
  {
    path: '/users',
    router: UserRoute,
  },
  {
    path: '/member',
    router: MemberRoute,
  },
  {
    path: '/projects',
    router: ProjectRoute,
  },
  {
    path: '/tasks',
    router: TaskRoute,
  },
  {
    path: '/workspace',
    router: WorkspaceRoute,
  },
];

moduleRouters.forEach((route) => router.use(route.path, route.router));

export default router;
