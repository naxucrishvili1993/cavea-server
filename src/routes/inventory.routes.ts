import { Router, Request, Response } from "express";

const router = Router();

// Get Inventory
router.get("/", async (req: Request, res: Response) => {
	res.send("Hello From Server!");
});

export default router;
