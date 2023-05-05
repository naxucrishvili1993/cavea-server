import { Router, Request, Response } from "express";
import Inventory, { InventoryMap } from "../models/InventoryModel";
import database from "../database";

const router = Router();

// Get Inventory
router.get("/", async (req: Request, res: Response) => {
	InventoryMap(database);
	const result = await Inventory.findAll().catch((err) =>
		console.log("Error occured!\n", err),
	);
	// Sort result alphabetically by default
	Array.isArray(result) &&
		result.sort((a, b) => a.item_name.localeCompare(b.item_name));
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
