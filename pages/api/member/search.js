import nc from 'next-connect';
import { all } from '@/middlewares/index';
import { searchMember } from '@/db/index';

const handler = nc();

handler.use(all);

handler.get(async (req, res) => {
  const member = await searchMember(
    req.db,
    req.query.q
  );
  res.send({ member });
});

export default handler;