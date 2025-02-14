import bcrypt from 'bcrypt';

export const hashValue = async (value: string, saltRounds: number = 10) =>
  await bcrypt.hash(value, saltRounds);

export const compareValues = async (value: string, hashedValue: string) =>
  await bcrypt.compare(value, hashedValue);
