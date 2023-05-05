import { Router, Request, Response } from "express";
import Inventory, { InventoryMap } from "../models/InventoryModel";
import database from "../database";

const router = Router();

// Get Data from form and insert into Database
router.post("/", async (req: Request, res: Response) => {
	const newItem = req.body as Inventory;
	InventoryMap(database);
	const result = await Inventory.create({ ...newItem });
	res.status(201).redirect("https://cavea-project.vercel.app/");
});

export default router;
