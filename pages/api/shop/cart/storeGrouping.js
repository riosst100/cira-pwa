import nc from 'next-connect';
import { all } from '@/middlewares/index';
import { getStoreGrouping } from '@/db/index';

const handler = nc();

handler.use(all);

handler.get(async (req, res) => {
  const carts = await getStoreGrouping(
    req.db,
    req.query.cart_id
  );

  res.send({ carts });
});

export default handler;