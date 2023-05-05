import { Router, Request, Response } from "express";
import Inventory, { InventoryMap } from "../models/InventoryModel";
import database from "../database";
import { sortByName, sortByPrice } from "../ArrayFunctions/arrayFunctions";

const router = Router();

// Get Inventory
router.get("/", async (req: Request, res: Response) => {
	console.log("Request: \n\n", req.query);
	console.log(req.query.name);

	InventoryMap(database);
	const result = await Inventory.findAll().catch((err) =>
		console.log("Error occured!\n", err),
	);
	// Sort result by name
	if (req.query.name === "1") Array.isArray(result) && sortByName(result);
	// Sort result by price
	if (req.query.price === "1") Array.isArray(result) && sortByPrice(result);
	console.log("Name: ", req.query.name === "1");
	console.log("Price: ", req.query.price === "1");

	res.status(200).json(result);
});

// Delete item by id
router.get(`/:id`, async (req: Request, res: Response) => {
	InventoryMap(database);
	const result = await Inventory.destroy({
		where: { item_id: req.params.id },
	}).then(() => "Item Deleted Successfully");
	res.status(200).redirect("http://localhost:3000");
});

export default router;
