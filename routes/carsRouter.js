import express from "express";
import { getCarsCatalog } from "../controllers/carsControllers.js";

const carsRouter = express.Router();

// carsRouter.get("/", homePageInfo);
carsRouter.get("/catalog", getCarsCatalog);
// carsRouter.get("/favorites", getFavoriteCars);

export default carsRouter;
