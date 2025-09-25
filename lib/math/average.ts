export const average = (arr: number[]): number => {
	let sum = 0;
	for (const num of arr) {
		sum += num;
	}
	return sum / arr.length;
};
