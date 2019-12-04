var fs = require('fs');

function restoreOriginalData() {
    fs.writeFileSync('housing.json', fs.readFileSync('housing-original.json'));
}

function loadData() {
    return JSON.parse(fs.readFileSync('housing.json'));
}

function saveData(data) {
	var obj = {
		housing: data
	};

	fs.writeFileSync('housing.json', JSON.stringify(obj));
}

module.exports = {
    restoreOriginalData: restoreOriginalData,
    loadData: loadData,
    saveData: saveData,
}