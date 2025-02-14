import { Types } from 'mongoose';

export type IMember = {
  userId: Types.ObjectId;
  workspaceId: Types.ObjectId;
  joinedAt: Date;
};
