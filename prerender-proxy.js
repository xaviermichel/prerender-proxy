var prerender = require('prerender/lib/index');

// override port for prerender
process.env.PORT = process.env.LISTENPORT || 3000;
process.env.HOST = process.env.LISTENHOST;


var server = prerender({
    workers: process.env.PHANTOM_CLUSTER_NUM_WORKERS || 2,
    iterations: process.env.PHANTOM_WORKER_ITERATIONS || 100,
    phantomBasePort: process.env.PHANTOM_CLUSTER_BASE_PORT || 12300,
    messageTimeout: process.env.PHANTOM_CLUSTER_MESSAGE_TIMEOUT
});

server.use(prerender.removeScriptTags());
server.use(prerender.httpHeaders());

server.start();

