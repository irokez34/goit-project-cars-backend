import Catalog from "../schemas/catalogCarsSchema.js";

export const getCarsCatalog = async (req, res, next) => {
  try {
    const catalog = await Catalog.find();
    console.log("work");
    res.send(catalog);
  } catch (error) {
    console.log(error);
  }
};
