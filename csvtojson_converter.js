const fs = require("fs")
const path = require("path")
const csv = require("csvtojson")

let csvFilePath = ("customer-data.csv")

csv()
.fromFile(csvFilePath)
.then((jsonObj) => {
	fs.writeFile('customer-data.json', JSON.stringify(jsonObj, null, 2), function(err, file) {
		if (err) console.log(err)
			console.log("converted successfully")
	})
})