const fs = require('fs');
const multer = require('multer');
const path = require('path');

const date = new Date();
const today = date.getDate() + '-' + date.getMonth() + '-' + date.getFullYear();
const times = date.getHours() + '.' + date.getMinutes();

if (!fs.existsSync(path.join('repositories', `${today}`))) {
    fs.mkdirSync(path.join('repositories', `${today}`));
}

const fileFilter = function (req, file, cb) {
    if (fs.existsSync(path.join('repositories', `${today}`, `${today}` + '-' + `${times}` + ' - ' + file.originalname))) {
        cb(new Error('File already exists!'), false);
    } else {
        cb(null, true); // Terima file
    }
}

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, `repositories/${today}`);
    },
    filename: function (req, file, cb) {
        cb(null, today + '-' + times + ' - ' + file.originalname);
    },
});

const upload = multer({ storage: storage, fileFilter: fileFilter, limits: { fileSize: 1024 * 1024 } });

// SINGLE FILE UPLOAD
const single_file_uploaded = upload.single('uploaded_file');

module.exports = single_file_uploaded;