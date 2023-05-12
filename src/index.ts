import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import { port } from "./config";
import inventoryRoutes from "./routes/inventory.routes";
import addProductRoutes from "./routes/addProduct.routes";
import database from "./database";
const cors = require("cors");

const serverPort = port;
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/inventories", inventoryRoutes);
app.use("/add", addProductRoutes);

app.listen(serverPort, async () => {
	console.log(`Server is started on port ${serverPort}`);
	try {
		await database.authenticate();
		console.log("Connection has been established successfully.");
	} catch (error) {
		console.error("Unable to connect to the database:\n", error);
	}
});
