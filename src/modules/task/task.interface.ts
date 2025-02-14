import { Types } from 'mongoose';
import { TaskPriorityEnumType, TaskStatusEnumType } from '../../utils/enum';

export type ITask = {
  taskCode: string;
  title: string;
  description: string | null;
  project: Types.ObjectId;
  workspace: Types.ObjectId;
  status: TaskStatusEnumType;
  priority: TaskPriorityEnumType;
  assignedTo: Types.ObjectId | null;
  createdBy: Types.ObjectId;
  dueDate: Date | null;
};
