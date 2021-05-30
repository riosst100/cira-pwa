import nc from 'next-connect';
import { all } from '@/middlewares/index';
import { getProduct } from '@/db/index';

const handler = nc();

handler.use(all);

handler.get(async (req, res) => {
  const product = await getProduct(
    req.db
  );

  res.send({ product });
});

export default handler;
