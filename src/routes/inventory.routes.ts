import { Router, Request, Response } from "express";
import inventory from "./inventory";
import Item, { ItemMap } from "../models/ItemModel";
import database from "../database";

const router = Router();
// console.log(inventory);

// Get Inventory
router.get("/", async (req: Request, res: Response) => {
	ItemMap(database);
	const result = await Item.findAll().catch((err) =>
		console.log("Error occured!!!\n", err),
	);
	res.status(200).json(result);
});

export default router;
