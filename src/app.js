'use strict';

import express from 'express';

import { authRoutes } from './routes/index.js';
import { setupMiddlewares } from './middlewares/index.js';

// import './db/db';
// import { authRouter, teamRoutes } from './routes';

// Initializations:
const app = express();

// Middlewares
setupMiddlewares(app);

// Routes
app.use('/auth', authRoutes);

app.get('/', (_req, res) => {
  res.status(200).json({ success: true, message: 'Hello World!' });
});

export default app;
