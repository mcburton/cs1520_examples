data = [{"name": "Crosby", "age": 28, "points": [0, 0, 0, 1, 1, 0]}, { "name": "Malkin", "age": 29, "points": [1, 1, 0, 0, 0, 0]}, {"name": "Letang", "age": 29, "points": [1, 0, 1, 0, 1]}];

// output
var names = grab(data, [], "name");
var avgs = avgAllSubarrays(grab(data, [], "points"), []);
var pairs = combineArrays(names, avgs, []);
document.write(JSON.stringify(pairs));

// Functional

function grab(arr, oldList, att) {
	if (arr.length > 0) {
		var remaining = arr.slice(1);
		// again, use Array.concat()
		var newList = oldList.concat([arr[0][att]]);
		return grab(remaining, newList, att);
	}
	else {
		return oldList;
	}
}

function avgAllSubarrays(arr, oldList) {
	if (arr.length > 0) {
		var remaining = arr.slice(1);
		// use of Array.concat() to generate a new Array
		var newList = oldList.concat([avgAcrossArray(arr[0])]);
		// had typo here, tried to reference "resmaining"
		return avgAllSubarrays(remaining, newList);
	}
	else {
		return oldList;
	}
}

function avgAcrossArray(arr) {
	return average(totalAcrossArray(arr, 0), arr.length);
}

function average(total, count) {
	return total/count;
}

function totalAcrossArray(arr, curTotal) {
	if (arr.length > 0) {
		var newTotal = curTotal + arr[0];
		var remaining = arr.slice(1);
		return totalAcrossArray(remaining, newTotal);
	}
	else {
		return curTotal;
	}
}

function combineArrays(arr1, arr2, oldList) {
	if (arr1.length > 0 && arr2.length > 0) {
		var newPair = [arr1[0], arr2[0]];
		// again, use Array.concat()
		var newList = oldList.concat([newPair]);
		var rem1 = arr1.slice(1);
		var rem2 = arr2.slice(1);
		return combineArrays(rem1, rem2, newList);
	}
	else {
		return oldList;
	}
}

