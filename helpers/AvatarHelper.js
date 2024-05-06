// export const filePath = path.join(
//   process.cwd(),
//   "public/avatars",
//   `${id}${file.originalname}`
// );

import Jimp from "jimp";
import * as path from "node:path";
import HttpError from "./HttpError.js";
// export const filePath = (file, id) => {
//   path.join(process.cwd(), "public/avatars", `${id}${file.originalname}`);
// };

export const img = async (file) => {
  try {
    const filePath = path.join(
      process.cwd(),
      "public/avatars",
      `${file.filename}`
    );
    const newImg = await Jimp.read(file.path);
    newImg.resize(250, 250);
    await newImg.writeAsync(filePath);
  } catch (error) {
    HttpError(error);
  }
};

// export const filePath = (id) => {
//   path.join((process.cwd(), "public/avatars", `${id}${req.file.originalname}`));
// };
