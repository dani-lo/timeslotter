/*
 * Serve JSON to our AngularJS client
 */
var slots = [
	{
		"name": "fooler",
		"type": "A",
		"booked": [0, 3, 4]
	},
	{
		"name": "bazzie boy",
		"type": "A",
		"booked": [1, 2]
	},
	{
		"name": "recode that",
		"type": "B",
		"booked": [0, 1, 2, 5, 6]
	},
	{
		"name": "refactor this",
		"type": "A",
		"booked": [2, 5]
	}
];

exports.slots = function (req, res) {
	//
	res.json(slots);
};