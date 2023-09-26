const express = require('express');
const cors = require('cors');
const router = express.Router();
const {test,registerUser,loginUser,getProfile} = require("../Controller/authController")

router.use(
    cors({
        credentials: true,
        origin: 'http://localhost:3000'
    })
)

router.get("/",test)
router.post("/regi",registerUser)
router.post("/login",loginUser)
router.get("/profile",getProfile)
module.exports = router