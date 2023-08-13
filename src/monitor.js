// performanceMonitor.js
const monitor = (req, res, next) => {
	const start = Date.now();

	res.on("finish", () => {
		const end = Date.now();
		const duration = end - start;

		console.log(`Request to ${req.path} took ${duration}ms`);
	});

	next();
};

module.exports = monitor;
