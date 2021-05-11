export async function getStore(db) {
    return db
      .collection('store')
      .find()
      .sort({ status: -1 })
      .toArray();
  }