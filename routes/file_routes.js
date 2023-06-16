const route = require('express').Router();
const { downloadFile, uploadFile, editFile, deleteFile, listFile } = require('../controllers/files_controllers')

// unduh
route.get('/download/:id', downloadFile)

// unggah
route.post('/upload', uploadFile)

// perbarui
route.put('/edit/:id', editFile)

// hapus
route.delete('/delete/:id', deleteFile)

// daftar file
route.get('/list-file', listFile)

module.exports = route