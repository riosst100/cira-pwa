import { nanoid } from 'nanoid';

export async function getPosts(db, from = new Date(), by, limit) {
  return db
    .collection('feed')
    .find({
      // Pagination: Fetch posts from before the input date or fetch from newest
      ...(from && {
        createdAt: {
          $lte: from,
        },
      }),
      ...(by && { creatorId: by }),
    })
    .sort({ createdAt: -1 })
    .limit(limit || 10)
    .toArray();
}

export async function findFeedById(db, id) {
  return db.collection('feed').findOne({
    _id: id,
  }).then((feed) => feed || null);
}

export async function insertPost(db, { content, creatorId }) {
  return db.collection('feed').insertOne({
    _id: nanoid(12),
    content,
    creatorId,
    createdAt: new Date(),
  }).then(({ ops }) => ops[0]);
}
