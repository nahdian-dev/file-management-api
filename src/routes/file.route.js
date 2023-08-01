const route = require('express').Router();
const single_file_uploaded = require('../controllers/upload.controller');
const { downloadFile, uploadFile, editFile, deleteFile } = require('../controllers/files.controller');

// unduh
route.get('/download/:id', downloadFile);

// unggah
route.post('/upload', single_file_uploaded, uploadFile);

// perbarui
route.post('/edit/:id', editFile);

// hapus
route.delete('/delete/:id', deleteFile);

module.exports = route;