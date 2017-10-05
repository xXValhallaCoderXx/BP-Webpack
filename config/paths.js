const path = require('path');

// Paths imported relative to this file
exports.PATHS = {
    // If we only direct to a folder, it searches for index.js
    // This is a node convention
    app: path.join(__dirname, '../src'),
    build: path.join(__dirname, '../build'),
    excludePath: path.join(__dirname, '../node_modules'),
};