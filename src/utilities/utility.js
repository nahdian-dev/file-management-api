const path = require('path');
const fs = require('fs');

exports.partials = (file) => {
    const dir = path.join(__dirname, '..', 'views', 'partials', file);
    return fs.readFileSync(dir, 'utf-8');
};