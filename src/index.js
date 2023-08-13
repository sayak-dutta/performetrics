// const express = require("express");
// const performanceMonitoringMiddleware = require("./middleware");

// function performetrics() {
// 	const app = express();

// 	app.use(performanceMonitoringMiddleware);

// 	app.get("/performance", (req, res) => {
// 		const suggestions = res.locals.suggestions || {};
// 		res.json({ suggestions });
// 	});

// 	return app;
// }

// module.exports = performetrics;

const monitor = require("./monitor");

module.exports = {
	monitor,
};
