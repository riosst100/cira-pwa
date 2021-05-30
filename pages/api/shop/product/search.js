import nc from 'next-connect';
import { all } from '@/middlewares/index';
import { searchProduct } from '@/db/index';

const handler = nc();

handler.use(all);

handler.get(async (req, res) => {
  const product = await searchProduct(
    req.db,
    req.query.q
  );
  res.send({ product });
});

export default handler;