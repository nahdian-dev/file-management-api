const fs = require('fs');
const path = require('path');
const multer = require('multer');
const Joi = require('joi');

const date = new Date();
const today = date.getDate() + '-' + date.getMonth() + '-' + date.getFullYear();
const times = date.getHours() + '.' + date.getMinutes();

let storage;

if (fs.existsSync(`./repositories/${today}`)) {
    storage = multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, `repositories/${today}`);
        },
        filename: function (req, file, cb) {
            cb(null, today + '-' + times + ' - ' + file.originalname);
        }
    });
} else {
    fs.mkdirSync(`./repositories/${today}`);

    storage = multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, `repositories/${today}`);
        },
        filename: function (req, file, cb) {
            cb(null, today + '-' + times + ' - ' + file.originalname);
        }
    });
}

const upload = multer({ storage: storage, limits: { fileSize: 1024 * 1024 } });

// SINGLE FILE UPLOAD
const single_file_uploaded = upload.single('uploaded_file');

module.exports = single_file_uploaded;