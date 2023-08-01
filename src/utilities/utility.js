const path = require('path');
const fs = require('fs');

exports.accessPartialsViews = (file) => {
    const dir = path.join(__dirname, '..', 'views', 'partials', file);
    return fs.readFileSync(dir, 'utf-8');
};

exports.accessFileLocalRepo = (fileName) => {
    const folder = fileName.substring(0, 9);
    const dir = path.join(__dirname, '..', '..', 'repositories', folder, fileName);

    return fs.readFileSync(dir, { encoding: 'utf-8' });
};