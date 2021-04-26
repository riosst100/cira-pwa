import { nanoid } from 'nanoid';

export async function getDashboardItems(db, limit) {
  return db
    .collection('dashboard_item')
    .find({})
    .sort({ sort_order: 1 })
    .limit(limit || 10)
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
