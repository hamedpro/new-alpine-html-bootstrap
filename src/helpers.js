export function average(array_of_numbers) {
	//returns undefined if array is empty and a number if nothing has gone wrong
	if (array_of_numbers.length === 0) {
		return undefined;
	}
	var total = 0;
	array_of_numbers.forEach((i) => (total += i));
	return total / array_of_numbers.length;
}
export var calc_discounted_price = (price_before_discount, discount_percent) =>
	(price_before_discount * (100 - discount_percent)) / 100;
export var sum = (array_of_numbers) => {
	var total = 0;
	array_of_numbers.forEach((i) => (total += i));
	return total;
};