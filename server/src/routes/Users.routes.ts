import { Router } from "express";
const router = Router();
import * as userController from './controllers/users.controller';
const { check } = require('express-validator');


router.post('/users', [
    check('username', 'Username is mandatory!!!').not().isEmpty(),
    check('password', 'password is mandatory!!!').not().isEmpty(),
    check('email', 'Email must be right!!!').isEmail()
], userController.createUser);
router.get('/users', userController.getUsers);
router.get('/users/:id', userController.getUser);
router.put('/users/:id', userController.updateUser);
router.delete('/users/:id', userController.deleteUser);

export default router;