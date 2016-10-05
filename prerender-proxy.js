var prerender = require('prerender/lib/index');

// override default values
process.env.RESOURCE_DOWNLOAD_TIMEOUT = 60 * 1000;
process.env.WAIT_AFTER_LAST_REQUEST = 1000;
process.env.JS_TIMEOUT = 60 * 1000;

var server = prerender({
});

server.use(prerender.removeScriptTags());
server.use(prerender.httpHeaders());

server.start();

