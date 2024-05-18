// import tokens from "razorpay/dist/types/tokens.js";
import User from "../model/user.js";
import bcrypt from "bcryptjs";
async function registerUser(req, res) {
  try {
    const { name, email, password } = req.body;
    const userExist = await User.findOne({ email });
    if (userExist) return res.json("User Exist");
    console.log(req.body);
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const data = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword,
    });
    return res.status(201).json({ success: true, data });
  } catch (error) {
    return res.status(500).json(error.message);
  }
}

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userExist = await User.findOne({ email });
    if (!userExist) return res.json("Email does not exist");

    const compare = await bcrypt.compare(password, userExist.password);
    if (!compare) return res.json("Invalid Password");

    return res.json({
      message: "Login Successfully",
    });
  } catch (err) {
    return res.status(500).json(err.message);
  }
};
export { registerUser, loginUser };
