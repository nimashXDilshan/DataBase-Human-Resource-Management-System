// auth/strategy.js
import { Strategy, ExtractJwt } from 'passport-jwt';
import passport from 'passport';
import db from '../config/db.js';

const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET
};

passport.use(new Strategy(opts, async (jwt_payload, done) => {
  try {
    // Convert the callback-based query to a promise
    console.log('JWT Payload:', jwt_payload);
    const [rows] = await db.promise().query(
      'SELECT user_id, user_name, employee_id, role_id FROM user_details WHERE user_name = ?',
      [jwt_payload.username]
    );

    if (!rows || rows.length === 0) {
      return done(null, false);
    }

    return done(null, rows[0]);
  } catch (error) {
    console.error('Authentication error:', error);
    return done(error, false);
  }
}));

export default passport;