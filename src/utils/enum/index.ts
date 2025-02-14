export type UserStatus = 'in-progress' | 'blocked' | 'active';

export type UserRole = 'super-admin' | 'admin' | 'member';

export const ProviderEnum = {
  GOOGLE: 'GOOGLE',
  FACEBOOK: 'FACEBOOK',
  GITHUB: 'GITHUB',
  EMAIL: 'EMAIL',
};

export const TaskStatusEnum = {
  BACKLOG: 'BACKLOG',
  TODO: 'TODO',
  IN_PROGRESS: 'IN_PROGRESS',
  IN_REVIEW: 'IN-REVIEW',
  DONE: 'DONE',
} as const;

export const TaskPriorityEnum = {
  LOW: 'LOW',
  MEDIUM: 'MEDIUM',
  HIGH: 'HIGH',
} as const;

export type ProviderEnumType = keyof typeof ProviderEnum;
export type TaskStatusEnumType = keyof typeof TaskStatusEnum;
export type TaskPriorityEnumType = keyof typeof TaskPriorityEnum;
