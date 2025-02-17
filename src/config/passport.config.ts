import httpStatus from 'http-status';
import passport from 'passport';

import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import { appConfig } from './app.config';
import { Request } from 'express';
import AppError from '../errors/appError';
import { ProviderEnum } from '../utils/enum';

passport.use(
  new GoogleStrategy(
    {
      clientID: appConfig.GOOGLE_CLIENT_ID as string,
      clientSecret: appConfig.GOOGLE_CLIENT_SECRET as string,
      callbackURL: appConfig.GOOGLE_CALLBACK_URL,
      scope: ['profile', 'email'],
      passReqToCallback: true,
    },
    async (req: Request, accessToken, refreshToken, profile, done) => {
      try {
        const { email, sub: googleId, picture } = profile._json();

        console.log(picture);
        if (!googleId) {
          return done(
            new AppError('Google ID is required', httpStatus.BAD_REQUEST),
            false
          );
        }

        const { user } = loginOrCreateAccountService({
          provider: ProviderEnum.GOOGLE,
          displayName: profile.displayName,
          providerId: googleId,
          picture: picture,
          email: email,
        });
        done(null, user);
        console.log(googleId);
      } catch (error) {
        done(error, false);
      }
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});
