import { Types } from 'mongoose';

export type IWorkspace = {
  name: string;
  description: string;
  owner: Types.ObjectId;
  inviteCode: string;
};
