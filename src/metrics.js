const prometheus = require("prom-client");

const httpRequestDurationMilliseconds = new prometheus.Histogram({
	name: "http_request_duration_milliseconds",
	help: "Duration of HTTP requests in milliseconds",
	labelNames: ["path", "method", "status"],
	buckets: [10, 50, 100, 500],
});

function collectMetrics(req, res, responseTimeInMs) {
	const { path, method } = req;
	const status = res.statusCode;

	httpRequestDurationMilliseconds.labels(path, method, status).observe(responseTimeInMs);
}

module.exports = {
	collectMetrics,
};
