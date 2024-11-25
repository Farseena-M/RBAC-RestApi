import jwt from 'jsonwebtoken';

export const generateToken = (id) => {
    return jwt.sign({ id }, process.env.USER_SECRET_STR, { expiresIn: process.env.LOGIN_EXPIRES });
};