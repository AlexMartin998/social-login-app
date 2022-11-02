import passport from 'passport';
import passportGoogle from 'passport-google-oauth20';
import passportGithub from 'passport-github2';
import passportFacebook from 'passport-facebook';

import {
  FACEBOOK_CLIENT_ID,
  FACEBOOK_CLIENT_SECRET,
  GITHUB_CLIENT_ID,
  GITHUB_CLIENT_SECRET,
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET,
} from '../config/index.js';

const GoogleStrategy = passportGoogle.Strategy;
const GitHubStrategy = passportGithub.Strategy;
const FacebookStrategy = passportFacebook.Strategy;

// // Google
passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: '/auth/google/callback',
    },

    function (accessToken, refreshToken, profile, done) {
      done(null, profile);

      /*// TODO: implementar con DB
      const user = {
        username: profile.displayName,
        avatar: profile.pothos[0],
      }; 
      // create user Model
      user.save()
      */
    }
  )
);

// // Github
passport.use(
  new GitHubStrategy(
    {
      clientID: GITHUB_CLIENT_ID,
      clientSecret: GITHUB_CLIENT_SECRET,
      callbackURL: '/auth/github/callback',
    },

    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);

// // Facebook
passport.use(
  new FacebookStrategy(
    {
      clientID: FACEBOOK_CLIENT_ID,
      clientSecret: FACEBOOK_CLIENT_SECRET,
      callbackURL: '/auth/facebook/callback',
    },

    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);

// Usamos esto xq W con sessions
passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});
