const admin = require('firebase-admin');

const db = admin.firestore();

const add = async (req, res) => {
  try {
    const document = await db.collection('theme').doc('colors');
    await document.update({
      [req.body.key]: req.body.value,
    });
    return res.status(200).send();
  } catch (error) {
    return res.status(500).send(error);
  }
};

module.exports = {
  add,
};
