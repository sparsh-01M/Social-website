// // authRoutes.js
// const express = require('express');
// const passport = require('passport');
// const router = express.Router();
// const User = require('../models/User');

// router.get('/google',
//   passport.authenticate('google', { scope: ['profile', 'email'] })
// );

// router.get('/google/callback',
//   passport.authenticate('google', { failureRedirect: '/login' }),
//   (req, res) => {
//     res.redirect(process.env.FRONTEND_URL);
//   }
// );

// router.get('/check', (req, res) => {
//   if (req.user) {
//     res.json({ user: req.user });
//   } else {
//     res.status(401).json({ user: null });
//   }
// });

// router.post('/logout', (req, res) => {
//   req.logout();
//   res.clearCookie('connect.sid');
//   res.status(200).json({ message: 'Logged out' });
// });

// module.exports = router;
import express from 'express';
import passport from 'passport';
const router = express.Router();

// Google Auth Routes
router.get('/google',
  passport.authenticate('google', { 
    scope: ['profile', 'email'],
    prompt: 'select_account' // Force account selection
  })
);

router.get('/google/callback', 
  passport.authenticate('google', { failureRedirect: '/login' }),
  (req, res) => {
    // Successful authentication
    res.redirect(process.env.FRONTEND_URL);
  }
);

export default router;