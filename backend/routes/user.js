const express = require("express");
const { register, login, logout , updatePassword, updateProfile, deleteMyProfile, myProfile, getUserProfile, getAllUsers, ForgetPassword, resetPassword } = require("../controllers/user");
const { isAuthenticated } = require("../middleware/auth");
const { followUser } = require("../controllers/user");
const User = require("../models/User");

const router = express.Router();

router.route("/register").post(register);

router.route("/login").post(login);

router.route("/logout").get(logout)

router.route("/follow/:id").get(isAuthenticated, followUser);

router.route("/update/password").put(isAuthenticated, updatePassword)

router.route("/update/profile").put(isAuthenticated, updateProfile)

router.route("/delete/me").delete(isAuthenticated, deleteMyProfile)

router.route("/myprofile").get(isAuthenticated, myProfile)

router.route("/user/:id").get(isAuthenticated, getUserProfile)   

router.route("/users").get(isAuthenticated, getAllUsers)

router.route("/forget/password").post(isAuthenticated, ForgetPassword)

router.route("/password/reset/:token").put(resetPassword)


module.exports = router; 
