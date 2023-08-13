const util = require("util");
const performanceData = {};
const histogram = {};

const SLOW_ROUTE_THRESHOLD = 100; // in ms
const HISTOGRAM_BUCKET_SIZE = 20; // in ms
const AVERAGE_RESPONSE_THRESHOLD = 50; // in ms

const errorCounts = {};
const monitor = () => {
	return (req, res, next) => {
		const start = Date.now();

		res.on("finish", () => {
			const end = Date.now();
			const duration = end - start;

			const route = req.originalUrl;

			logErrorStats(route, res.statusCode);

			if (duration > 100) {
				const warning = util.format(
					"\x1b[33m%s\x1b[0m",
					`Slow route detected: ${route}. took ${duration}ms. Consider optimizing.`
				);
				console.warn("[performetrics]: " + warning);
				logMemoryUsage(route);
			} else {
				const success = util.format(
					"\x1b[32m%s\x1b[0m",
					`Route ${route} processed successfully. took ${duration}ms`
				);
				console.log("[performetrics]: " + success);
				logMemoryUsage(route);
			}
		});

		next();
	};
};
// Log memory usage
function logMemoryUsage(route) {
	const usedMemory = process.memoryUsage().heapUsed / 1024 / 1024;
	console.log(`[performetrics]: Memory usage for ${route}: ${usedMemory.toFixed(2)} MB`);
}

function logErrorStats(route, statusCode) {
	if (statusCode >= 400) {
		if (!errorCounts[route]) {
			errorCounts[route] = 0;
		}
		errorCounts[route]++;

		console.log(`Error statistics for ${route}:`);
		console.log(`- Status code: ${statusCode}`);
		console.log(`- Total errors: ${errorCounts[route]}`);
	}
}

module.exports = monitor;

// module.exports = performanceMonitorMiddleware;
