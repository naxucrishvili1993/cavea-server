type Inventory = {
	id: number;
	name: string;
	price: number;
	location: string;
};

const inventory: Inventory[] = [];
for (let i = 0; i < 50; i++) {
	inventory.push({
		id: i,
		name: "Giorgi",
		price: i + 1,
		location: "Cavea Gallery",
	});
}

export default inventory;
