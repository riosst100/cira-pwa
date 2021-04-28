import { nanoid } from 'nanoid';

export async function getDashboardItems(db, limit, from) {
  return db
    .collection('dashboard_item')
    .find({
      // Pagination: Fetch posts from before the input date or fetch from newest
      ...(from && {
        sort_order: {
          $gte: from,
        },
      }),
    })
    .sort({ sort_order: 1 })
    .limit(limit || 100)
    .toArray();
}

export async function insertPost(db, { content, creatorId }) {
  return db.collection('posts').insertOne({
    _id: nanoid(12),
    content,
    creatorId,
    createdAt: new Date(),
  }).then(({ ops }) => ops[0]);
}
