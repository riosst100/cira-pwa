import nc from 'next-connect';
import isEmail from 'validator/lib/isEmail';
import normalizeEmail from 'validator/lib/normalizeEmail';
import bcrypt from 'bcryptjs';
import { all } from '@/middlewares/index';
import { extractUser } from '@/lib/api-helpers';
import { insertUser, findUserByPhone } from '@/db/index';

const handler = nc();

handler.use(all);

handler.post(async (req, res) => {
  const { phone, call_name, name, birthdate, password } = req.body;
  // const email = normalizeEmail(req.body.email);
  // if (!isEmail(email)) {
  //   res.status(400).send('The email you entered is invalid.');
  //   return;
  // }
  if (!password || !name || !call_name || !birthdate || !phone) {
    res.status(400).send('Missing field(s)');
    return;
  }
  if (await findUserByPhone(req.db, phone)) {
    res.status(403).send('The phone has already been used.');
    return;
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await insertUser(req.db, {
    phone, password: hashedPassword, bio: '', name, call_name, birthdate,
  });
  req.logIn(user, (err) => {
    if (err) throw err;
    res.status(201).json({
      user: extractUser(req.user),
    });
  });
});

export default handler;
