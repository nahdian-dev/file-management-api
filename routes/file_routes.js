const route = require('express').Router();
const single_file_uploaded = require('../controllers/upload_controllers');
const { downloadFile, uploadFile, editFile, deleteFile } = require('../controllers/files_controllers');

// unduh
route.get('/download/:id', downloadFile);

// unggah
route.post('/upload', single_file_uploaded, uploadFile);

// perbarui
route.post('/edit/:id', editFile);

// hapus
route.delete('/delete/:id', deleteFile);

module.exports = route;