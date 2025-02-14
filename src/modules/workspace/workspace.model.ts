import { model, Schema } from 'mongoose';
import { IWorkspace } from './workspace.interface';
import { generateInviteCode } from '../../utils/generateCode';

const workspaceSchema = new Schema<IWorkspace>(
  {
    name: { type: String, required: true, trim: true },
    description: { type: String },
    owner: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    inviteCode: {
      type: String,
      required: true,
      unique: true,
      default: generateInviteCode,
    },
  },
  {
    timestamps: true,
  }
);


workspaceSchema.methods.resetInviteCode = function(){
    this.inviteCode = generateInviteCode();
}


export const Workspace = model<IWorkspace>('Workspace', workspaceSchema);
