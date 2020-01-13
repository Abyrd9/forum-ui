const signIn = async (req, res) => {
  try {
    const anonymous = req.query.anonymous || false;
    if (anonymous) {
      firebase.auth().signInAnonymously();
      return res.status(200).send();
    } else {
      throw "Can't Sign in.";
    }
  } catch (error) {
    return res.status(500).send(error);
  }
};

module.exports = {
  signIn,
};
