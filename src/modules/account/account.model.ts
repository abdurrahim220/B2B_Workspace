import { model, Schema } from 'mongoose';
import { IAccount } from './account.interface';
import { ProviderEnum } from '../../utils/enum';

const accountSchema = new Schema<IAccount>(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    provider: {
      type: String,
      enum: Object.values(ProviderEnum),
      required: true,
    },
    providerId: {
      type: String,
      required: true,
      unique: true,
    },
    refreshToken: {
      type: String,
      default: null,
    },
    expireToken: {
      type: Date,
      default: null,
    },
    role: {
      type: String,
      enum: ['super-admin', 'admin', 'member'],
      default: 'member',
    },
  },
  {
    timestamps: true,
    toJSON: {
      transform(doc, ret) {
        delete ret.refreshToken;
      },
    },
  }
);

export const Account = model<IAccount>('Account', accountSchema);
