export async function getProduct(db) {
    return db
      .collection('product')
      .find()
      .sort({ name: 1 })
      .toArray();
}

export async function findProductById(db, id) {
  return db.collection('product').findOne({
    _id: id,
  }).then((product) => product || null);
}

export async function findProductByLink(db, product_link) {
  return db.collection('product').findOne({
    link: product_link,
  }).then((product) => product || null);
}

export async function searchProduct(db, q) {
  return db
    .collection('product')
    .find({"name": new RegExp(".*"+q+".*", "i")})
    .toArray();
}