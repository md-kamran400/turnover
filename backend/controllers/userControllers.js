const users = require("../models/userSchema");
const userotp = require("../models/userOtp");
const nodemailer = require("nodemailer");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const ProductModle = require("../models/data")

// email config
const tarnsporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
});

exports.userregister = async (req, res) => {
  const { fname, email, password } = req.body;

  if (!fname || !email || !password) {
    res.status(400).json({ error: "Please Enter All Input Data" });
  }

  try {
    const presuer = await users.findOne({ email: email });

    if (presuer) {
      res.status(400).json({ error: "This User Allready exist in our db" });
    } else {
      const userregister = new users({
        fname,
        email,
        password,
      });

      // here password hasing

      const storeData = await userregister.save();
      res.status(200).json(storeData);
    }
  } catch (error) {
    res.status(400).json({ error: "Invalid Details", error });
  }
};

// user send otp
exports.userOtpSend = async (req, res) => {
  const { email } = req.body;

  if (!email) {
    res.status(400).json({ error: "Please Enter Your Email" });
  }

  try {
    const presuer = await users.findOne({ email: email });

    if (presuer) {
      const OTP = Math.floor(100000 + Math.random() * 900000);

      const existEmail = await userotp.findOne({ email: email });

      if (existEmail) {
        const updateData = await userotp.findByIdAndUpdate(
          { _id: existEmail._id },
          {
            otp: OTP,
          },
          { new: true }
        );
        await updateData.save();

        const mailOptions = {
          from: process.env.EMAIL,
          to: email,
          subject: "Sending Eamil For Otp Validation",
          text: `OTP:- ${OTP}`,
        };

        tarnsporter.sendMail(mailOptions, (error, info) => {
          if (error) {
            console.log("error", error);
            res.status(400).json({ error: "email not send" });
          } else {
            console.log("Email sent", info.response);
            res.status(200).json({ message: "Email sent Successfully" });
          }
        });
      } else {
        const saveOtpData = new userotp({
          email,
          otp: OTP,
        });

        await saveOtpData.save();
        const mailOptions = {
          from: process.env.EMAIL,
          to: email,
          subject: "Sending Eamil For Otp Validation",
          text: `OTP:- ${OTP}`,
        };

        tarnsporter.sendMail(mailOptions, (error, info) => {
          if (error) {
            console.log("error", error);
            res.status(400).json({ error: "email not send" });
          } else {
            console.log("Email sent", info.response);
            res.status(200).json({ message: "Email sent Successfully" });
          }
        });
      }
    } else {
      res.status(400).json({ error: "This User Not Exist In our Db" });
    }
  } catch (error) {
    res.status(400).json({ error: "Invalid Details", error });
  }
};

// exports.userLogin = async (req, res) => {
//   const { email, password } = req.body;

//   if (!email || !password) {
//     return res
//       .status(400)
//       .json({ error: "Please enter both email and password" });
//   }

//   try {
//     // Find the user by email
//     const user = await users.findOne({ email });

//     if (!user) {
//       return res.status(400).json({ error: "User not found with this email" });
//     }

//     // Check if password matches
//     const isMatch = await user.comparePassword(password);

//     if (!isMatch) {
//       return res.status(400).json({ error: "Incorrect password" });
//     }

//     // Generate and send authentication token
//     const token = await user.generateAuthToken();
//     res
//       .status(200)
//       .json({ message: "User logged in successfully", userToken: token });
//   } catch (error) {
//     console.error("Error logging in:", error);
//     res.status(500).json({ error: "Internal server error" });
//   }
// };

exports.userLogin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await users.findOne({ email });
    if (user) {
      bcrypt.compare(password, user.password, (error, result) => {
        if (result) {
          let token = jwt.sign({ userID: user._id }, "kamran");
          res.status(200).json({ msg: "user Logged in SunccessFull", token });
        } else {
          res.status(200).json({ msg: "incorrect Passorwd" });
        }
      });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};




exports.getData = async (req, res) => {
  try {
    let data = await ProductModle.find();
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
