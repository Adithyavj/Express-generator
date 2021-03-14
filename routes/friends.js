var express = require("express");
var router = express.Router();

//List all friends
router.get("/", function (req, res, next) {
  //const values = ["Adi", "Arjun", "Harshad", "Vajid", "Muneeb"];

  const person = {
    name: "Adithya",
    admin: true,
    comments: { comment: "This is a sample comment", date: "14/March/2021" },
  };
  res.render("friends", { person });
});

module.exports = router;
