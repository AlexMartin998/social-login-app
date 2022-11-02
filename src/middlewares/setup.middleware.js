'use strict';

import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import morgan from 'morgan';

import cookieSession from 'cookie-session';
import passport from 'passport';

import { FRONT_END_URL, KEY_COOKIE_SESSION } from '../config/index.js';

import './../utils/passport.js';

// import {
//   initializePassport,
//   passportInit,
//   protectWithJWT,
// } from './auth.middleware';

export const setupMiddlewares = app => {
  app.use(express.json());
  app.use(
    cors({
      origin: FRONT_END_URL,
      methods: 'GET, POST, PUT, DELETE',
      credentials: true,
    })
  );
  app.use(express.urlencoded({ extended: false }));
  app.use(helmet()).use(compression());
  app.use(morgan('dev'));

  // // cookie sessions
  app.use(
    cookieSession({
      name: 'session',
      keys: [KEY_COOKIE_SESSION],

      // Cookie Options
      maxAge: 24 * 60 * 60 * 1000, // 24 hours
    })
  );

  // // Passport
  app.use(passport.initialize());
  app.use(passport.session());

  // app.use(initializePassport());
  // passportInit();
  // app.use(protectWithJWT); // Asi ni llega a las routes
};
