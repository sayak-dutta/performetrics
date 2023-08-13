const { collectMetrics } = require("./metrics");
// const { generateSuggestions } = require("./monitor");

function performanceMonitoringMiddleware(req, res, next) {
	const startTime = process.hrtime();

	res.on("finish", () => {
		const duration = process.hrtime(startTime);
		const responseTimeInMs = duration[0] * 1000 + duration[1] / 1000000;

		collectMetrics(req, res, responseTimeInMs);
		generateSuggestions(req, res, responseTimeInMs);
	});

	next();
}

module.exports = performanceMonitoringMiddleware;
