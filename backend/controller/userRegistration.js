import User from "../model/user.js";
import bcrypt from "bcryptjs";
async function registerUser(req, res) {
  try {
    const registerData = req.body;
    console.log(req.body);
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

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

export { registerUser };
