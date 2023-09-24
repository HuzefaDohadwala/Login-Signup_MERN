const express = require('express');
const cors = require('cors');
const router = express.Router();
const {test,registerUser,loginUser} = require("../Controller/authController")

router.use(
    cors({
        credentials: true,
        origin: 'http://localhost:3000'
    })
)

router.get("/",test)
router.post("/regi",registerUser)
router.post("/login",loginUser)
module.exports = router