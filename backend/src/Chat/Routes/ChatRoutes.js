const express = require("express");
const router = express.Router();
const { addMessage, getMessages } = require("../controllers/chatController");

router.post("/addmsg", addMessage);
router.post("/getmsg", getMessages);

module.exports = router;
