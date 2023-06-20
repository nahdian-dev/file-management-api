const route = require('express').Router();
const single_file_uploaded = require('../controllers/upload_controllers');
const { downloadFile, uploadFile, editFile, deleteFile, listFile } = require('../controllers/files_controllers');

// unduh
route.get('/download/:id', downloadFile);

// unggah
route.post('/upload', single_file_uploaded, uploadFile);

// perbarui
route.put('/edit/:id', editFile);

// hapus
route.delete('/delete/:id', deleteFile);

// daftar file
route.get('/list-file', listFile);

module.exports = route;