import { DataTypes, Model, Sequelize } from "sequelize";
import sequelize from "../database";

export default class Inventory extends Model {
	public item_id?: number;
	public item_name!: string;
	public item_location!: string;
	public item_price!: number;
}

export const InventoryMap = (sequelize: Sequelize) => {
	Inventory.init(
		{
			item_id: {
				type: DataTypes.INTEGER,
				autoIncrement: true,
				primaryKey: true,
			},
			item_name: {
				type: DataTypes.STRING(100),
				allowNull: false,
			},
			item_location: {
				type: DataTypes.STRING(100),
				allowNull: false,
			},
			item_price: {
				type: DataTypes.FLOAT,
				allowNull: false,
			},
		},
		{
			sequelize,
			tableName: "inventories",
			timestamps: false,
		},
	);
	Inventory.sync();
};
