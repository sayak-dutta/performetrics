# Performetrics - Express Performance Monitoring Package

Performetrics is an easy-to-use npm package for monitoring the performance of ExpressJS applications in real-time. It collects metrics such as response times, CPU and memory usage, and provides visualizations and suggestions for optimizing your applications.

## Installation

Install the Performetrics package via npm:

```shell

npm install performetrics

```

## Usage

1\. Import the Performetrics package and initialize it in your ExpressJS application:

```javascript

const express = require('express');
const {monitor} = require('performetrics');

const app = express();

// Initialize Performetrics middleware
app.use(monitor());

// Other middleware and route handlers
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
```

2\. Start your ExpressJS application, and the Performetrics middleware will automatically log performance metrics for incoming requests.

```shell
[performetrics]: Route /users processed successfully. took 18ms
[performetrics]: Memory usage for /users: 7.27 MB
[performetrics]: Slow route detected: /users/slow. took 5008ms. Consider optimizing.
[performetrics]: Memory usage for /users/slow: 7.73 MB
```



## Contributing

Contributions to Performetrics are welcome! If you encounter any issues, have suggestions, or want to contribute new features, please visit the [GitHub repository](https://github.com/sayak-dutta/performetrics) to submit issues or pull requests.

## License

Performetrics is released under the [MIT License](https://opensource.org/licenses/MIT).

---
