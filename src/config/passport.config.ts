import passport from 'passport';

import { OStrategy as GoogleStrategy } from 'passport-google-oauth20';
import { appConfig } from './app.config';

passport.use(
  new GoogleStrategy({
    clientID: appConfig.GOOGLE_CLIENT_ID,
    clientSecret: appConfig.GOOGLE_CLIENT_SECRET,
    callbackURL: appConfig.GOOGLE_CALLBACK_URL,
    scope: ['profile', 'email'],
    passReqToCallback: true,
  })
);
