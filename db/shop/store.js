export async function getStore(db) {
    return db
      .collection('shop_store')
      .find()
      .sort({ status: -1 })
      .toArray();
  }

export async function findStoreByCode(db, store_code) {
  return db.collection('shop_store').findOne({
    code: store_code,
  }).then((store) => store || null);
}