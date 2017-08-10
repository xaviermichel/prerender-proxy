var url = require("url");

module.exports = {
	init: function() {
		this.exclusionsArray = (process.env.exclusionsList && process.env.exclusionsList.split(',')) || [];
	},
	beforePhantomRequest: function(req, res, next) {
		var parsed = url.parse(req.prerender.url);

		for (let exclusion of this.exclusionsArray) {
			if (parsed.href.indexOf(exclusion) !== -1) {
				res.send(404);
			}
		}

		next();
	}
}
