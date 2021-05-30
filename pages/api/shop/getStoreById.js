import nc from 'next-connect';
import { all } from '@/middlewares/index';
import { getStoreById } from '@/db/index';

const handler = nc();

handler.use(all);

handler.get(async (req, res) => {
  const store = await getStoreById(
    req.db,
    req.query.store_id
  );

  res.send({ store });
});

export default handler;
