const UserModel = require('../model/userModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const Login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await UserModel.findOne({ email: email });
        if (!user) {
            return res.status(400).send({ message: "Invalid username" });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).send({ message: "Invalid password" });
        }

        const token = await jwt.sign({ id: user._id }, process.env.SECRET_KEY, { expiresIn: '7 days' });
        res.status(200).send({ token: token });
    } catch (error) {
        res.status(500).send({ message: "Internal server error" });
    }
}

const Register = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const user = await UserModel.findOne({ email: email });
        if (user) {
            return res.status(400).send({ message: "User already exists" });
        }
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt);
        await UserModel.create({ name, email, password: hashPassword });
        res.status(200).send({ message: "User is registered" });
    } catch (error) {
        res.status(500).send({ message: "Internal server error" });
    }
}

const userAuthenticate = async (req, res) => {
    const token = req.header("x-auth-token");
    if (!token) {
        return res.status(401).send({ message: "Access denied. No token provided." });
    }

    try {
        const verify = await jwt.verify(token, process.env.SECRET_KEY);
        const user = await UserModel.findById(verify.id).select("-password");
        res.send(user);
    } catch (error) {
        res.status(400).send({ message: "Invalid token." });
    }
}

const Googlelogin = async (req, res) => {
    const { name, email } = req.body;
    try {
        const user = await UserModel.findOne({ email: email });
        if (!user) {
            await UserModel.create({ name, email });
        }
        const token = await jwt.sign({ id: user._id }, process.env.SECRET_KEY, { expiresIn: '7 days' });
        res.status(200).send({ token: token });
    } catch (error) {
        res.status(500).send({ message: "Internal server error" });
    }

}
module.exports = {
    Login,
    Register,
    userAuthenticate,
    Googlelogin
};
