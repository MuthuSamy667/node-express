const { Users } = require('../db');

const getUsers = () => {
  return Users.findAll()
    .then((users) => users)
    .catch((err) => {
      throw err;
    });
};

const getUserId = () => {
  return Users.findById(id)
    .then((users) => users)
    .catch((err) => {
      throw err;
    });
};


const deleteUsers = () => {
  return Users.deleteUsers(req.params.id)
    .then((users) => users)
    .catch((err) => {
      throw err;
    });
};

module.exports = {
  getUsers,
  getUserId,
  deleteUsers,
};
