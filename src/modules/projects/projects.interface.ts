import { Types } from 'mongoose';

export type IProject = {
  name: string;
  description: string | null;
  emoji: string | null;
  workspace: Types.ObjectId;
  createdBy: Types.ObjectId;
};
