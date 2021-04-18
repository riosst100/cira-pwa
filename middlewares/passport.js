import passport from 'passport';
import bcrypt from 'bcryptjs';
import { Strategy as LocalStrategy } from 'passport-local';
import { findUserById, findUserByPhone } from '@/db/index';

passport.serializeUser((user, done) => {
  done(null, user._id);
});

// passport#160
passport.deserializeUser((req, id, done) => {
  findUserById(req.db, id).then((user) => done(null, user), (err) => done(err));
});

passport.use(
  new LocalStrategy(
    { usernameField: 'phone', passReqToCallback: true },
    async (req, phone, password, done) => {
      const user = await findUserByPhone(req.db, phone);
      if (user && (await bcrypt.compare(password, user.password))) done(null, user);
      else done(null, false, { message: 'Phone or password is incorrect' });
    },
  ),
);

export default passport;
