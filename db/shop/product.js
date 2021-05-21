export async function getProduct(db) {
    return db
      .collection('product')
      .find()
      .sort({ name: 1 })
      .toArray();
}

export async function findProductByLink(db, product_link) {
  return db.collection('product').findOne({
    link: product_link,
  }).then((product) => product || null);
}