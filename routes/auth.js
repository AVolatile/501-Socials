const router = require("express").Router();
const User = require("../models/User").default;

// REGISTER
router.post("/register", async (req, res) => {
  const user = await new User({
    username: "john",
    email: "john@gmail.com",
    password: "12345",
    profilePicture: "",
    coverPicture: "",
    followers: [10],
    followings: [20],
    isAdmin: false,
    desc: "Hey",
    city: "Coventry",
    from: "RI",
    relationship: 1,
  });

  await user.save();
  res.send("ok");
});

module.exports = router;

// //generate new password
// const salt = await bcrypt.genSalt(10);
// const hashedPassword = await bcrypt.hash(req.body.password, salt);

// //create new user
// const newUser = new User({
//   username: req.body.username,
//   email: req.body.email,
//   password: hashedPassword,
// });
// //LOGIN
// router.post("/login", async (req, res) => {
//   try {
//     const user = await User.findOne({ email: req.body.email });
//     !user && res.status(404).json("user not found");

//     const validPassword = await bcrypt.compare(req.body.password, user.password)
//     !validPassword && res.status(400).json("wrong password")

//     res.status(200).json(user)
//   } catch (err) {
//     res.status(500).json(err)
//   }
// });
