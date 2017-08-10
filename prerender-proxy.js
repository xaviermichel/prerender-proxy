var prerender = require('prerender/lib/index');

var server = prerender({
	workers: 2,
	iterations: 50,
	softIterations: 10,
	jsTimeout: 60000,
	resourceDownloadTimeout: 20000,
	waitAfterLastRequest: 1000
});

server.use(prerender.removeScriptTags());
server.use(prerender.httpHeaders());

server.start();

