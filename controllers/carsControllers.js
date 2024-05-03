import Catalog from "../schemas/catalogCarsSchema.js";

export const getCarsCatalog = async (req, res, next) => {
  try {
    const catalog = await Catalog.find();
    res.send(catalog);
  } catch (error) {
    next(error);
  }
};
