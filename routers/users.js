const usersRouter = require('express').Router();
  
const {findAllUsers, createUsers, findUseryById, updateUser, deleteUser, checkEmptyNameAndEmailAndPassword, checkEmptyNameAndEmail, checkIsUserExists} = require('../middlewares/users');
const {sendAllUsers, sendUserCreated, sendUserById, sendUserUpdated, sendUserDeleted} = require('../controllers/users');

usersRouter.get('/users', findAllUsers, sendAllUsers);
usersRouter.post('/users', findAllUsers, checkIsUserExists, checkEmptyNameAndEmailAndPassword,  createUsers, sendUserCreated);
usersRouter.get("/users/:id", findUseryById, sendUserById);
usersRouter.put("/users/:id", checkEmptyNameAndEmail, updateUser, sendUserUpdated)
usersRouter.delete("/users/:id", deleteUser, sendUserDeleted)

module.exports = usersRouter;
 