import { Types } from 'mongoose';
import { ProviderEnumType, UserRole } from '../../utils/enum';

export type IAccount = {
  provider: ProviderEnumType;
  providerId: string;
  userId: Types.ObjectId;
  refreshToken: string | null;
  expireToken: Date | null;
  role: UserRole;
};
