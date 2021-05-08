import nc from 'next-connect';
import { all } from '@/middlewares/index';
import { getShopCategory } from '@/db/index';

const handler = nc();

handler.use(all);

const maxAge = 1 * 24 * 60 * 60;

handler.get(async (req, res) => {
  const categories = await getShopCategory(
    req.db,
    req.query.limit ? parseInt(req.query.limit) : undefined,
    req.query.from ? parseInt(req.query.from) : undefined
  );

  if (req.query.from && categories.length > 0) {
    // This is safe to cache because from defines
    //  a concrete range of posts
    res.setHeader('cache-control', `public, max-age=${maxAge}`);
  }

  res.send({ categories });
});

export default handler;
