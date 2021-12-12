import { RequestHandler } from "express";
import { validationResult } from "express-validator";
const bcrypt = require('bcryptjs');
const { User } = require('../../database');

export const createUser: RequestHandler = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
        return res.status(422).json({ errs: errors.array() });
    req.body.password = bcrypt.hashSync(req.body.password, 10);
    const user = await User.create(req.body);
    res.json(user);
}
export const getUsers: RequestHandler = async (req, res) => {
    const users = await User.findAll();
    res.json(users);
}
export const getUser: RequestHandler = async (req, res) => {
    const user = await User.findOne({
        where: { id: req.params.id }
    });
    res.json(user);
}
export const updateUser: RequestHandler = async (req, res) => {
    res.json();
}
export const deleteUser: RequestHandler = async (req, rest) => {
    rest.json();
}