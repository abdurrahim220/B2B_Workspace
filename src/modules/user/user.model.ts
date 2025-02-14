import { model, Schema } from 'mongoose';
import { IUser } from './user.interface';
import { compareValues, hashValue } from '../../utils/hashedValues';

const userSchema = new Schema<IUser>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    password: {
      type: String,
      //   select: false,
      select: 0,
    },
    profilePicture: {
      type: String,
      default: null,
    },
    
    lastLogin: {
      type: Date,
      default: null,
    },
    currentWorkspace: {
      type: Schema.Types.ObjectId,
      ref: 'Workspace',
      default: null,
    },
    
    status: {
      type: String,
      enum: ['in-progress', 'blocked', 'active'],
      default: 'in-progress',
    },
    isDelete: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

userSchema.pre('save', async function (next) {
  if (this.isModified('password')) {
    if (this.password) {
      this.password = await hashValue(this.password);
    }
  }
  next();
});

// userSchema.methods.omitPassword=function():Omit(IUser,'password')=>{
//     const userObject = this.toObject();
//     delete userObject.password;
//     return userObject;
// }

userSchema.post('save', function (doc, next) {
  doc.password = '';

  // console.log(this, 'post hook : we saved our data');
  next();
});

userSchema.methods.correctPassword = async function (
  candidatePassword: string,
  hashedPassword: string
): Promise<boolean> {
  return compareValues(candidatePassword, hashedPassword);
};

export const User = model<IUser>('User', userSchema);
