import { Router } from "express";
const router = Router();
import * as userController from './controllers/users.controller';


router.post('/', userController.createUser);
router.get('/', userController.getUsers);
router.get('/:id', userController.getUser);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);

export default router;