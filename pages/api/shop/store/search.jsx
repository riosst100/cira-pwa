import nc from 'next-connect';
import { all } from '@/middlewares/index';
import { searchStore } from '@/db/index';

const handler = nc();

handler.use(all);

handler.get(async (req, res) => {
  const stores = await searchStore(
    req.db,
    req.query.q
  );
  res.send({ stores });
});

export default handler;