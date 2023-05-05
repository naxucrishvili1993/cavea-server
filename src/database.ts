import { db_url } from "./config";
import { Sequelize } from "sequelize";

const DB_URL = process.env.DB_URL || db_url;
export default new Sequelize(DB_URL, {
	dialect: "postgres",
	protocol: "postgres",
	logging: false,
	dialectOptions: {
		ssl: {
			require: false,
		},
	},
});
