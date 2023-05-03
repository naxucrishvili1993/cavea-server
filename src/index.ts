import express from "express";
import bodyParser from "body-parser";
import { port } from "./config";
import inventoryRoutes from "./routes/inventory.routes";

const serverPort = port;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", inventoryRoutes);

app.listen(serverPort, () => {
	console.log(`Server is started on port ${serverPort}`);
});
