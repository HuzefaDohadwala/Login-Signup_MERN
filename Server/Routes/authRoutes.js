const express = require('express');
const cors = require('cors');
const router = express.Router();
const {test,registerUser} = require("../Controller/authController")

router.use(
    cors({
        credentials: true,
        origin: 'http://localhost:3000'
    })
)

router.get("/",test)
router.post("/regi",registerUser)
module.exports = router