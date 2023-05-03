import { Router, Request, Response } from "express";
import inventory from "./inventory";

const router = Router();
// console.log(inventory);

// Get Inventory
router.get("/", async (req: Request, res: Response) => {
	res.json(inventory);
});

export default router;
