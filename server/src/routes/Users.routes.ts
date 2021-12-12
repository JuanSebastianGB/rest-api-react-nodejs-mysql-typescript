import { Router } from "express";
const router = Router();
import * as userController from './controllers/users.controller';
const { check } = require('express-validator');


router.post('/', [
    check('username', 'Username is mandatory!!!').not().isEmpty(),
    check('password', 'password is mandatory!!!').not().isEmpty(),
    check('email', 'Email must be right!!!').isEmail()
], userController.createUser);
router.get('/', userController.getUsers);
router.get('/:id', userController.getUser);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);

router.post('/login', userController.login);
export default router;