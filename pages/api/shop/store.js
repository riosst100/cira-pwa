import nc from 'next-connect';
import { all } from '@/middlewares/index';
import { getStore } from '@/db/index';

const handler = nc();

handler.use(all);

handler.get(async (req, res) => {
  const stores = await getStore(
    req.db
  );

  res.send({ stores });
});

export default handler;
