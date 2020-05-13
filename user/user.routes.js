const router = require('express').Router();

const { getUsers } = require('./user.service');
const { getUserId } = require('./user.service');
const { deleteUsers } = require('./user.service');


router.get('/', (req, res) => {
  getUsers()
    .then((users) => res.status(200).send({ status: 's', data: users }))
    .catch((err) => {
      console.error('err:', err);
      res.status(400).send({ status: 'e', message: err.message });
    });
});

router.get('/:id', (req, res) => {
  getUserId(req.params.id)
    .then((users) => res.status(200).send({ status: 's', data: users }))
    .catch((err) => {
      console.error('err:', err);
      res.status(400).send({ status: 'e', message: err.message });
    });
});

router.delete('/', (req, res) => {
  deleteUsers()
    .then((users) => res.status(200).send({ status: 's', data: users }))
    .catch((err) => {
      console.error('err:', err);
      res.status(400).send({ status: 'e', message: err.message });
    });
});



module.exports = router;
