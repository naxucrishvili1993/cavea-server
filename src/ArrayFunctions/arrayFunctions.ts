export type TArray = {
	item_name: string;
	item_price: number;
	item_location: string;
};

export const sortByName = (arr: TArray[]) => {
	if (Array.isArray(arr)) {
		return arr.sort((a, b) => a.item_name.localeCompare(b.item_name));
	}
};

export const sortByPrice = (arr: TArray[]) => {
	if (Array.isArray(arr)) {
		return arr.sort((a, b) => a.item_price - b.item_price);
	}
};

export const filterByLocation = (arr: TArray[], location: string) => {
	if (location === "All") return arr;
	if (Array.isArray(arr)) {
		return arr.filter((item) => item.item_location === location);
	}
};
