const asyncHandler = require('express-async-handler');
const File = require('../models/file_model');
const fs = require('fs');

// @desc download spesifik file
// @route GET- /api/download/:id
// @access private
const downloadFile = asyncHandler(async (req, res) => {
    res.send({ message: 'Download file routes' })
})

// @desc unggah file
// @route POST- /api/upload
// @access public
const uploadFile = asyncHandler(async (req, res) => {
    if (!req.file) {
        res.status(400);
        throw new Error('Nothing to Upload!');
    }

    File.create({
        name: req.file.filename,
        size: req.file.size,
        path: req.file.path,
        createdAt: Date.now()
    });

    res.json({
        message: 'Berhasil upload file!',
        name: req.file.filename,
        size: req.file.size,
        path: req.file.path,
        createdAt: Date.now()
    });
});

// @desc perbarui file
// @route PUT- /api/edit/:id
// @access public
const editFile = asyncHandler(async (req, res) => {

})

// @desc hapus file
// @route DELETE - /api/delete/:id
// @access public
const deleteFile = asyncHandler(async (req, res) => {
    const file = await File.findById(req.params.id);

    if (!file) {
        res.status(400);
        throw new Error('Cannot find a request file!');
    }

    try {
        await File.findByIdAndRemove(req.params.id);
        fs.unlinkSync(file.path);

        res.json({
            message: 'Berhasil delete file!',
            file_details: {
                name: req.file.filename,
                size: req.file.size,
                path: req.file.path
            }
        });
    } catch (error) {
        res.status(400);
        throw new Error(error);
    }


});

module.exports = { downloadFile, uploadFile, editFile, deleteFile }