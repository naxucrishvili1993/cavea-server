import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import { port } from "./config";
import inventoryRoutes from "./routes/inventory.routes";
import database from "./database";

const serverPort = port;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/inventories", inventoryRoutes);

app.get("/", (req: Request, res: Response) => {
	res.redirect("http://localhost:3000/inventories");
});

app.listen(serverPort, async () => {
	console.log(`Server is started on port ${serverPort}`);
	try {
		await database.authenticate();
		console.log("Connection has been established successfully.");
	} catch (error) {
		console.error("Unable to connect to the database:\n", error);
	}
});
