import cookieSession from 'cookie-session';
import { appConfig } from './app.config';

export const sessionConfig = cookieSession({
  name: 'session',
  keys: [appConfig.session_secret as string],
  maxAge: 24 * 60 * 60 * 1000,
  secure: appConfig.NODE_ENV === 'production',
  httpOnly: true,
  sameSite: 'lax',
});
