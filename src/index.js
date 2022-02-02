
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if (matrix == undefined || matrix.length < 1) return [];

	let newMatrix = matrix.map(function (item, index) {
		if (index % 2 != 0) {
			item.reverse();
		}
		return item;
	})

	let arr = []

	for (let item of newMatrix) {
		arr = arr.concat(item);
	}

	return arr;
  
}
