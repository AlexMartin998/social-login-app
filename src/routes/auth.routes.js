import { Router } from 'express';
import passport from 'passport';
import { FRONT_END_URL } from '../config/index.js';

const router = Router();

// Se llaman desde el Front
router.get('/login/faild', (req, res) => {
  res.status(401).json({ success: false, message: 'failure' });
});
router.get('/login/success', (req, res) => {
  if (req.user) {
    return res.status(200).json({
      success: true,
      message: 'successfull',
      user: req.user, // lo tenemos x passport
      // cookies: req.cookies,
      // jwt
    });
  }
});

router.get('/logout', (req, res) => {
  req.logout();
  res.redirect(FRONT_END_URL);
});

// // Las maneja Google y passport
// get xq no se envia nada y uso passport
router.get(
  '/google',
  passport.authenticate('google', {
    scope: ['profile'],
  })
);

// despues del login, google llama a esta url configurada en la console de google
router.get(
  '/google/callback',
  passport.authenticate('google', {
    successRedirect: FRONT_END_URL,
    failureRedirect: '/login/faild',
  })
);

// // Github
router.get(
  '/github',
  passport.authenticate('github', {
    scope: ['profile'],
  })
);

router.get(
  '/github/callback',
  passport.authenticate('github', {
    successRedirect: FRONT_END_URL,
    failureRedirect: '/login/faild',
  })
);

// // Facebook
router.get(
  '/facebook',
  passport.authenticate('facebook', {
    scope: ['profile'],
  })
);

router.get(
  '/facebook/callback',
  passport.authenticate('facebook', {
    successRedirect: FRONT_END_URL,
    failureRedirect: '/login/faild',
  })
);

export default router;
