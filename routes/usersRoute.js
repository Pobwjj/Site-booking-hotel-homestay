// const express = require("express");
// const router = express.Router();
// const User = require("../models/user")

// router.post("/register", async (req, res) => {
//     const newuser = new User({ name: req.body.name, email: req.body.email, password: req.body.password })

//     try {
//         const user = await newuser.save()
//         res.send('Đăng ký người dùng thành công')
//     } catch (error) {
//         return res.status(400).json({ message: error })
//     }
// });

// router.post("/login", async (req, res) => {
//     const { email, password } = req.body

//     try {
//         const user = await User.findone({ email: email, password: password })
//         if (user) {
//             res.send(user)
//         } else {
//             return res.status(400).json({ message: 'Đăng nhập thất bại' })
//         }
//         res.send('Đăng ký người dùng thành công')
//     } catch (error) {
//         return res.status(400).json({ message: error })
//     }
// });

// module.exports = router;