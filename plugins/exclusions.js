var url = require("url"),
	util = require("prerender/lib/util.js");

module.exports = {
	init: function() {
		this.exclusionsArray = (process.env.exclusionsList && process.env.exclusionsList.split(',')) || [];
	},
	beforePhantomRequest: function(req, res, next) {
		var parsed = url.parse(req.prerender.url);
		var isToExclude = false;

		for (let exclusion of this.exclusionsArray) {
			if (parsed.href.indexOf(exclusion) !== -1) {
				isToExclude = true;
			}
		}

		if (isToExclude) {
			util.log('Will not crawl : ' + parsed.href);
			res.send(404);
		} else {
			next();
		}
	}
}
