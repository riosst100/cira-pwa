import session from 'express-session';
import connectMongo from 'connect-mongo';

const MongoStore = connectMongo(session);

export default function sessionMiddleware(req, res, next) {
  const mongoStore = new MongoStore({
    client: req.dbClient,
    stringify: false,
  });
  return session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    store: mongoStore,
    cookie  : {
      secure: false, // If it's true, login is not working as well
      maxAge: (24 * 60 * 60 * 1000) * 365
    }
  })(req, res, next);
}
