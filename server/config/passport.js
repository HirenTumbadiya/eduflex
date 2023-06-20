const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const JwtStrategy = require('passport-jwt').Strategy;
const { ExtractJwt } = require('passport-jwt');
const User = require('../models/User');

// Local strategy for username/password authentication
passport.use(new LocalStrategy({
  usernameField: 'email'
}, async (email, password, done) => {
  try {
    // Find the user by email
    const user = await User.findOne({ email });
    
    // If user not found or password doesn't match, return error
    if (!user || !(await user.comparePassword(password))) {
      return done(null, false, { message: 'Invalid email or password' });
    }

    // Authentication successful
    return done(null, user);
  } catch (error) {
    return done(error);
  }
}));

// JWT strategy for token authentication
const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: 'your-secret-key'
};

passport.use(new JwtStrategy(jwtOptions, async (payload, done) => {
  try {
    // Find the user by ID from the payload
    const user = await User.findById(payload.id);

    // If user not found, return error
    if (!user) {
      return done(null, false);
    }

    // Authorization successful
    return done(null, user);
  } catch (error) {
    return done(error);
  }
}));
