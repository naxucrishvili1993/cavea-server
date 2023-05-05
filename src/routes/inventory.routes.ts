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
	const result = await Inventory.findAll().catch((err) =>
		console.log("Error occured!\n", err),
	);
	// Sort result by name
	if (req.query.name === "1") Array.isArray(result) && sortByName(result);
	// Sort result by price
	if (req.query.price === "1") Array.isArray(result) && sortByPrice(result);
	// Filter result by location
	let filteredArray: TArray[] | undefined;
	if (Array.isArray(result)) {
		filteredArray = filterByLocation(result, String(req.query.location));
	}
	// ----------------------------------------
	filteredArray
		? res.status(200).json(filteredArray)
		: res.status(200).json(result);
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
