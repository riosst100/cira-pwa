import nc from 'next-connect';
import bcrypt from 'bcryptjs';
import { all } from '@/middlewares/index';
import { extractUser } from '@/lib/api-helpers';
import { insertUser, findUserByPhone } from '@/db/index';
import { capitalizedText } from '@/components/text/CapitalizedText';

const handler = nc();

handler.use(all);

handler.post(async (req, res) => {
  const { phone, birthdate, password } = req.body;
  const name = capitalizedText(req.body.name);
  const call_name = capitalizedText(req.body.call_name);
  const kecamatan = capitalizedText(req.body.kecamatan);
  const desa = capitalizedText(req.body.desa);
  // const email = normalizeEmail(req.body.email);
  // if (!isEmail(email)) {
  //   res.status(400).send('The email you entered is invalid.');
  //   return;
  // }
  if (!password || !name || !call_name || !birthdate || !phone || !kecamatan || !desa) {
    res.status(400).send('Missing field(s)');
    return;
  }
  if (await findUserByPhone(req.db, phone)) {
    res.status(403).send('The phone has already been used.');
    return;
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  const role = "Member";
  const user = await insertUser(req.db, {
    phone, password: hashedPassword, bio: '', name, call_name, birthdate, kecamatan, desa, role
  });
  req.logIn(user, (err) => {
    if (err) throw err;
    res.status(201).json({
      user: extractUser(req.user),
    });
  });
});

export default handler;
