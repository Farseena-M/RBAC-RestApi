import User from "../models/userSchema.js";
import jwt from 'jsonwebtoken';
import { generateToken } from "../utils/generateToken.js";

export const Register = async (req, res) => {
    const { name, email, password, role } = req.body;
    try {
        const userExists = await User.findOne({ email });
        if (userExists) {
            return res.status(400).json({ message: "User already exists" });
        }
        const user = await User.create({ name, email, password, role });
        res.status(201).json({
            _id: user.id,
            name: user.name,
            email: user.email,
            role: user.role
        });
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};



export const userLogin = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (user && (await user.matchPassword(password))) {
            res.status(200).json({
                _id: user.id,
                name: user.name,
                email: user.email,
                role: user.role,
                token: generateToken(user.id),
            });
        } else {
            res.status(401).json({ message: "Invalid credentials" });
        }
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};





export const adminPage = async (req, res) => {
    try {
        
        if (req.user && req.user.role === 'Admin') {
            res.status(200).json({
                success: true,
                message: "Welcome, Admin",
                timestamp: new Date().toISOString(),
            });
        } else {
            res.status(403).json({
                success: false,
                message: "Access denied. Admins only.",
            });
        }
    } catch (error) {
        console.error('Error accessing admin page:', error.message);
        res.status(500).json({
            success: false,
            message: "An error occurred while processing your request.",
        });
    }
};


export const userPage = async (req, res) => {    
    try {
        if (req.user && req.user.role === 'User') {
            res.status(200).json({
                success: true,
                message: "Welcome, User",
                timestamp: new Date().toISOString(),
            });
        } else {
            res.status(403).json({
                success: false,
                message: "Access denied. Users only.",
            });
        }
    } catch (error) {
        console.error('Error accessing user page:', error.message);
        res.status(500).json({
            success: false,
            message: "An error occurred while processing your request.",
        });
    }
};


export const ModeratorPage = async (req, res) => {
    try {
        if (req.user && req.user.role === 'Moderator') {
            res.status(200).json({
                success: true,
                message: "Welcome, Moderator",
                timestamp: new Date().toISOString(),
            });
        } else {
            res.status(403).json({
                success: false,
                message: "Access denied. Moderators only.",
            });
        }
    } catch (error) {
        console.error('Error accessing Moderator page:', error.message);
        res.status(500).json({
            success: false,
            message: "An error occurred while processing your request.",
        });
    }
};
