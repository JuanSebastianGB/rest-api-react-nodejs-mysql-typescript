import { RequestHandler } from "express";
import { validationResult } from "express-validator";
const bcrypt = require('bcryptjs');
const { User } = require('../../database');
const moment = require('moment');
const jwt = require('jwt-simple');

export const createUser: RequestHandler = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
        return res.status(422).json({ errs: errors.array() });
    req.body.password = bcrypt.hashSync(req.body.password, 10);
    const user = await User.create(req.body);
    res.json(user);
}
export const getUsers: RequestHandler = async (_req, res) => {
    const users = await User.findAll();
    res.json(users);
}
export const getUser: RequestHandler = async (req, res) => {
    const user = await User.findOne({
        where: { id: req.params.id }
    });
    res.json(user);
}
export const updateUser: RequestHandler = async (_req, res) => {
    res.json();
}
export const deleteUser: RequestHandler = async (_req, res) => {
    res.json();
}

export const login: RequestHandler = async (req, res) => {
    const user = await User.findOne({
        where: { email: req.body.email }
    });
    if (user) {
        const equals = bcrypt.compareSync(req.body.password, user.password);
        if (equals) {
            res.json({ success: createToken(user) });
        } else {
            res.json({ error: "user not found" });
        }
    } else {
        res.json({ error: "user not found" });
    }
}

const createToken = (user: any) => {
    const payload = {
        userId: user.id,
        createdAt: moment().unix(),
        expiredAt: moment().add(5, 'minutes').unix()
    }
    const token = jwt.encode(payload, 'secret');
    return token;
}
