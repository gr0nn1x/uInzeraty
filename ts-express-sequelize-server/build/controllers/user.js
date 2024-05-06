"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addFriend = exports.deleteUser = exports.updateUser = exports.createUser = exports.getUserById = exports.getAllUsers = void 0;
const bcrypt_1 = require("bcrypt");
const index_1 = __importDefault(require("../models/index"));
const User = index_1.default.users;
const getAllUsers = async (req, res) => {
    try {
        const users = await User.findAll();
        if (!users || users.length === 0)
            return res.status(500).send({ message: "Users not found" });
        return res.status(200).send({ message: "Users found", payload: users });
    }
    catch (err) {
        console.log(err);
        res.status(500).end();
    }
};
exports.getAllUsers = getAllUsers;
const getUserById = async (req, res) => {
    try {
        const { id } = req.params;
        if (!id)
            return res.status(400).send({ message: "Missing details!" });
        const user = await User.findOne({ where: { id: id } });
        if (!user)
            return res.status(500).send({ message: "User not found" });
        const userRoles = await user.getUserRole();
        return res
            .status(200)
            .send({ message: "User found", payload: { user, userRoles } });
    }
    catch (err) {
        console.log(err);
        res.status(500).end();
    }
};
exports.getUserById = getUserById;
const createUser = async (req, res) => {
    try {
        const { email, username, password } = req.body;
        if (!email || !password)
            return res.status(400).send({ message: "Missing details!" });
        const user = await User.findOne({ where: { email: email } });
        if (user)
            return res.status(400).send({ message: "User already exists" });
        const salt = await (0, bcrypt_1.genSalt)(10);
        const hashedString = await (0, bcrypt_1.hash)(password, salt);
        const createdUser = await User.create({
            email: email,
            username: username,
            password: hashedString,
            verified: false,
        });
        await createdUser.addUserRole("user");
        return res.status(200).send({ message: "User created" });
    }
    catch (err) {
        console.log(err);
        res.status(500).end();
    }
};
exports.createUser = createUser;
const updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const data = req.body;
        if (!id || !data)
            return res.status(400).send({ message: "Missing details!" });
        const user = await User.findOne({ where: { id: id } });
        if (!user)
            return res.status(500).send({ message: "User not found" });
        for (const ops of data) {
            user[ops.propName] = ops.value;
        }
        const action = await user.save();
        if (!action)
            return res.status(500).send({ message: "Something went wrong!" });
        return res.status(200).send({ message: "User updated", payload: user });
    }
    catch (err) {
        console.log(err);
        res.status(500).end();
    }
};
exports.updateUser = updateUser;
const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        if (!id)
            return res.status(400).send({ message: "Missing details!" });
        const user = await User.destroy({ where: { id: id } });
        if (!user)
            return res.status(500).send({ message: "User not found" });
        return res.status(200).send({ message: "User deleted" });
    }
    catch (err) {
        console.log(err);
        res.status(500).end();
    }
};
exports.deleteUser = deleteUser;
const addFriend = async (req, res) => {
    try {
        const { userid, friendid } = req.body;
        if (!userid || !friendid)
            return res.status(400).send({ message: "Missing details!" });
        const user = await User.findOne({ where: { id: userid } });
        if (!user)
            return res.status(500).send({ message: "User not found" });
        await user.addFriend(friendid);
        const friends = await user.getFriends();
        return res.status(200).send({ message: "Friend added", friends });
    }
    catch (err) {
        console.log(err);
        res.status(500).end();
    }
};
exports.addFriend = addFriend;
