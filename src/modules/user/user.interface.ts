import { Types } from 'mongoose';
import { UserStatus } from '../../utils/enum';


export type IUser = {
  name: string;
  email: string;
  password?: string;
  profilePicture: string | null;
  lastLogin: Date | null;
  currentWorkspace: Types.ObjectId | null;
  status: UserStatus;
  isDelete: boolean;
};
