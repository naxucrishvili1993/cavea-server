import { db_url } from "./config";
import { Sequelize } from "sequelize";

export default new Sequelize(db_url, {
	dialect: "postgres",
	protocol: "postgres",
	dialectOptions: {
		ssl: {
			require: false,
		},
	},
});
