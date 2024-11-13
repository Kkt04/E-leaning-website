import User from "../model/user.js"; // Assuming you're using a User model

// SIGN UP - Register a new user
export const signUp = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const newUser = new User({ name, email, password });
    await newUser.save();
    res.status(201).json({ message: "User registered successfully", user: newUser });
  } catch (err) {
    res.status(400).json({ error: "Error signing up user", err });
  }
};

// LOGIN - Authenticate a user
export const logIn = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    if (user.password !== password) {  // In a real app, use hashed passwords and bcrypt
      return res.status(401).json({ message: "Invalid credentials" });
    }

    res.status(200).json({ message: "User logged in successfully", user });
  } catch (err) {
    res.status(400).json({ error: "Error logging in user", err });
  }
};
