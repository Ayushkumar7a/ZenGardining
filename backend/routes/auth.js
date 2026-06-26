require("dotenv").config();
const express = require("express");
const router = express.Router();
const User = require("../models/Users");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { body, validationResult } = require("express-validator");
const fetchuser = require('../middleware/fetchuser');
const JWT_SIGNATURE = "AyushKiGFhaiAlexa";


// Route 1: Register a new user using POST "/api/auth/register"
router.post(
    "/register", [
        body("name", "Name must be at least 3 characters").isLength({ min: 3 }),
        body("email", "Enter a valid email").escape().isEmail(),
        body("password", "Password must be at least 6 characters").isLength({ min: 6 }),
    ],
    async(req, res) => {
        let success = false;
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        }

        try {
            const UserExist = await User.findOne({ email: req.body.email });
            if (UserExist) {
                return res.status(422).json({ error: "User already exists" });
            }

            const salt = await bcrypt.genSalt(10);
            const hashpassword = await bcrypt.hash(req.body.password, salt);

            const user = new User();
            user.name = req.body.name;
            user.email = req.body.email;
            user.password = hashpassword;

            await user.save();

            const data = {
                user: {
                    id: user._id,
                },
            };

            const token = jwt.sign(data, JWT_SIGNATURE, {
                expiresIn: "1h",
            });
            success = true;
            return res.status(200).json({ success, token });
        } catch (error) {
            console.error("Error during registration:", error);
            return res.status(500).json({ error: "Internal Server Error" });
        }
    }
);

// Route 2: login a user using POST   "/api/auth/login"
router.post("/login", [
        body("email", "Enter a valid email").escape().isEmail(),
        body("password", "Password can not be blank").exists(),
    ],
    async(req, res) => {
        let success = false;
        const email = req.body.email;
        const password = req.body.password;

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        }

        try {
            const UserExist = await User.findOne({ email });
            if (!UserExist) {
                return res.status(401).json({ error: "Please try to login with correct credentials" });
            }

            const passwordCompare = await bcrypt.compare(password, UserExist.password);

            if (!passwordCompare) {
                return res.status(401).json({ error: "Please try to login with correct credentials" });
            }

            const data = {
                user: {
                    id: UserExist._id,
                }
            }

            const authtoken = jwt.sign(data, JWT_SIGNATURE);
            success = true;
            res.status(200).json({ success, authtoken });

        } catch (error) {
            console.error("Error during Login:", error);
            return res.status(500).json({ error: "Internal Server Error" });
        }
    }
);

// Route 3: GET user details using : GET "/api/auth/getuser". login required
router.get("/getuser", fetchuser, async(req, res) => {
    try {
        const userId = req.user.id;
        const user = await User.findById(userId).select("name email");
        return res.status(200).json({ user });
    } catch (error) {
        console.error(error.massage);
        res.status(500).send("Internal server error");
    }
});

module.exports = router;