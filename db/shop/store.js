export async function getStore(db) {
    return db
      .collection('shop_store')
      .find()
      .sort({ status: -1 })
      .toArray();
  }