data = [{"name": "Crosby", "age": 28, "points": [0, 0, 0, 1, 1, 0]}, { "name": "Malkin", "age": 29, "points": [1, 1, 0, 0, 0, 0]}, {"name": "Letang", "age": 29, "points": [1, 0, 1, 0, 1]}];

// Imperative
var avgs = [], total = 0, avg = 0;

for (var i=0; i < data.length; i++) {
	total = 0;
	for (var j=0; j < data[i].points.length; j++) {
		total += data[i].points[j];
	}
	avg = total / data[i].points.length;
	avgs.push([data[i].name, avg]);
}

document.write(JSON.stringify(avgs));
