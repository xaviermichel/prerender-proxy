var prerender = require('prerender/lib/index'),
	exclusionsPlugins = require('./plugins/exclusions');

// each url which contains one entry of exclusionsList will not be downloaded
// entry are separated with ',', for example : 'please,ignore,those,words
process.env.exclusionsList = '?lightbox=';


var server = prerender({
	workers: 2,
	iterations: 50,
	softIterations: 10,
	jsTimeout: 60000,
	resourceDownloadTimeout: 20000,
	waitAfterLastRequest: 1000
});

server.use(exclusionsPlugins);
server.use(prerender.removeScriptTags());
server.use(prerender.httpHeaders());

server.start();

