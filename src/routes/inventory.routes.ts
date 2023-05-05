import { Router, Request, Response } from "express";
import Inventory, { InventoryMap } from "../models/InventoryModel";
import database from "../database";
import {
	TArray,
	filterByLocation,
	sortByName,
	sortByPrice,
} from "../ArrayFunctions/arrayFunctions";

const router = Router();

// Get Inventory
router.get("/", async (req: Request, res: Response) => {
	InventoryMap(database);
	let filteredArray: TArray[] | undefined;
	const result = await Inventory.findAll();
	if (Array.isArray(result)) {
		// Sort result by name
		if (req.query.name === "1") sortByName(result);
		// Sort result by price
		if (req.query.price === "1") sortByPrice(result);
		// Filter result by location
		filteredArray = filterByLocation(result, String(req.query.location));
	}

	// If filtered array is not undefined, send to the user
	filteredArray && res.status(200).json(filteredArray);
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
