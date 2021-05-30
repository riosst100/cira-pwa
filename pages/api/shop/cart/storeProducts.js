import nc from 'next-connect';
import { all } from '@/middlewares/index';
import { getStoreProducts } from '@/db/index';

const handler = nc();

handler.use(all);

handler.get(async (req, res) => {
  const carts = await getStoreProducts(
    req.db,
    req.query.store_id
  );

  res.send({ carts });
});

export default handler;