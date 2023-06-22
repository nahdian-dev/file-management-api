const fs = require('fs');
const multer = require('multer');
const path = require('path');

const date = new Date();
const today = date.getDate() + '-' + date.getMonth() + '-' + date.getFullYear();
const times = date.getHours() + '.' + date.getMinutes();

const fileFilter = function (req, file, cb) {
    const allowedExtension = ['.txt'];
    const fileExtension = path.extname(file.originalname);

    if (!fs.existsSync(path.join('repositories', `${today}`))) {
        fs.mkdirSync(path.join('repositories', `${today}`));
    }

    if (!fs.existsSync(path.join('repositories', `${today}`, `${today}` + '-' + `${times}` + ' - ' + file.originalname))) {
        cb(null, true); // Terima file
    } else {
        cb(new Error('File already exists!'), false);
    }

    if (allowedExtension.includes(fileExtension)) {
        cb(null, true); // Terima file
    } else {
        cb(new Error('File type not allowed!'), false);
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