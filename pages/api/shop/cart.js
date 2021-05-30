import nc from 'next-connect';
import { all } from '@/middlewares/index';
import { getCarts } from '@/db/index';

const handler = nc();

handler.use(all);

handler.get(async (req, res) => {
  const carts = await getCarts(
    req.db,
    req.query.member_id ? parseInt(req.query.member_id) : undefined
  );

  res.send({ carts });
});

export default handler;