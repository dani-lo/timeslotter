/*
 * Serve JSON to our AngularJS client
 */
var slots = [
	{
		"name": "Foo Bar",
		"type": "A",
		"booked": [0, 3, 4]
	},
	{
		"name": "Someday Sometime",
		"type": "A",
		"booked": [1, 2]
	},
	{
		"name": "Hurry up",
		"type": "B",
		"booked": [0, 1, 2, 5, 6]
	},
	{
		"name": "Very very often",
		"type": "A",
		"booked": [2, 5]
	}
];

exports.slots = function (req, res) {
	//
	res.json(slots);
};