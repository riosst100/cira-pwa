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

export async function searchStore(db, q) {
  return db
    .collection('shop_store')
    .find({"name": new RegExp(".*"+q+".*", "i")})
    .toArray();
}

export async function getStoreById(db, store_id) {
  return db.collection('shop_store').findOne({
    _id: store_id,
  }).then((store) => store || null);
}