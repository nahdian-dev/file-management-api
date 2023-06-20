const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'repositories/files');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
})

const upload = multer({ storage: storage });

// SINGLE FILE UPLOAD
const single_file_uploaded = upload.single('uploaded_file');

module.exports = single_file_uploaded;