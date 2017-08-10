var prerender = require('prerender/lib/index');

// override default values
process.env.RESOURCE_DOWNLOAD_TIMEOUT = 60 * 1000;
process.env.WAIT_AFTER_LAST_REQUEST = 1000;
process.env.JS_TIMEOUT = 60 * 1000;

var server = prerender({
	workers: 2,
	iterations: 50,
	softIterations: 10,
	jsTimeout: 60000,
	resourceDownloadTimeout: 20000
});

server.use(prerender.removeScriptTags());
server.use(prerender.httpHeaders());

server.start();

