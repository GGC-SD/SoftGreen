const passport = require('passport');
const LocalStrategy = require('passport-local');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const bcrypt = require('bcrypt');

const User = require('../models/user.model');
const config = require('./config');

const localLogin = new LocalStrategy({
  usernameField: 'userId',
   passwordField: 'pinNumber'
}, async (userId, pinNumber, done) => {
  let user = await User.findOne({ userId });
  if (!user || !bcrypt.compareSync(pinNumber, user.hashedPin)) {
    return done(null, false, { error: 'Your login details could not be verified. Please try again.' });
  }
  user = user.toObject();
  delete user.hashedPin;
  done(null, user);
});

const jwtLogin = new JwtStrategy({
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: config.jwtSecret
}, async (payload, done) => {
  let user = await User.findById(payload._id);
  if (!user) {
    return done(null, false);
  }
  user = user.toObject();
  delete user.hashedPin;
  done(null, user);
});

passport.use(jwtLogin);
passport.use(localLogin);

module.exports = passport;
