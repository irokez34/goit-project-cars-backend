import bcrypt from "bcrypt";
import User from "../schemas/userSchema.js";
import HttpError from "../helpers/HttpError.js";
import jwt from "jsonwebtoken";

import crypto from "node:crypto";
import * as path from "node:path";
import Jimp from "jimp";

export const registerUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const normalizeEmail = email.toLowerCase();
    const randomId = crypto.randomUUID();
    // const verificationToken = crypto.randomUUID();
    const user = await User.findOne({ email: normalizeEmail });
    if (user !== null) {
      throw HttpError(409, "User already registered ");
    }
    const filePath = path.join(
      process.cwd(),
      "public/avatars",
      `${randomId}${req.file.originalname}`
    );
    const refImg = await Jimp.read(req.file.path);
    refImg.resize(250, 250);
    await refImg.writeAsync(filePath);
    const passwordHash = await bcrypt.hash(password, 10);
    const newUser = await User.create({
      email: normalizeEmail,
      password: passwordHash,
      avatarURL: filePath,
      id: randomId,
      // verificationToken,
    });

    // const sendMessage = await transport.sendMail(
    //   message(email, newUser.verificationToken)
    // );
    // if (!sendMessage) {
    //   throw HttpError(400, "Cannot send message");
    // }

    res.status(201).send({
      message: "Registration successfully",
      email: newUser.email,
      subscription: newUser.subscription,
      avatar: filePath,
    });
  } catch (error) {
    next(error);
  }
};

export const loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const normalizeEmail = email.toLowerCase();
    const user = await User.findOne({ email: normalizeEmail });
    if (user === null) {
      throw HttpError(401, "Email or password is incorrect");
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (isMatch === false) {
      throw HttpError(401, "Email or password is incorrect");
    }
    if (user.verify === false) {
      throw HttpError(401, "Not Verify");
    }

    const token = jwt.sign(
      {
        id: user._id,
        email: user.email,
      },
      process.env.JWT_SECRET,
      { expiresIn: 60 * 60 }
    );

    await User.findByIdAndUpdate(user._id, { token });
    res.send({ token });
  } catch (error) {
    next(error);
  }
};

export const logoutUser = async (req, res, next) => {
  const { id } = req.user;
  try {
    const user = await User.findById(id);
    if (user === null) {
      throw HttpError(401);
    }
    await User.findByIdAndUpdate(id, { token: null });
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
};

export const getCurrentUser = async (req, res, next) => {
  const { id } = req.user;

  try {
    const user = await User.findById(id);
    if (user === null) {
      throw HttpError(401);
    }
    const { email, subscription } = user;
    res.send({ email, subscription });
  } catch (error) {
    next(error);
  }
};

// export const uploadAvatar = async (req, res, next) => {
//   const { id } = req.user;

//   try {
//     if (req.file === undefined) {
//       throw HttpError(404);
//     }
//     filePath(req.file, id);
//     const img = await Jimp.read(req.file.path);
//     img.resize(250, 250);
//     await img.writeAsync(filePath);
//     const user = await User.findByIdAndUpdate(
//       id,
//       { avatarURL: filePath },
//       {
//         new: true,
//       }
//     );
//     res.send(user);
//   } catch (error) {
//     next(error);
//   }
// };
