import nc from 'next-connect';
import { all } from '@/middlewares/index';
import { getCartByStoreId } from '@/db/index';

const handler = nc();

handler.use(all);

handler.get(async (req, res) => {
  const carts = await getCartByStoreId(
    req.db,
    req.query.member_id,
    req.query.store_id
  );

  res.send({ carts });
});

export default handler;