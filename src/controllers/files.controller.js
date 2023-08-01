const fs = require('fs');
const path = require('path');
const asyncHandler = require('express-async-handler');

const fileServices = require('../services/file.services');
const File = require('../models/file.model');

// @desc download spesifik file
// @route GET- /api/download/:id
// @access public
const downloadFile = async (req, res) => {
    const fileData = await fileServices.getFileById(req.params.id);

    const folder = fileData.name.substring(0, 9);
    const localPathFile = path.join(__dirname, '..', '..', 'repositories', folder, fileData.name);

    return res.download(localPathFile);
};

// @desc unggah file
// @route POST- /api/upload
// @access public
const uploadFile = asyncHandler(async (req, res) => {
    if (!req.file) {
        res.status(400);
        throw new Error('Nothing to upload');
    }

    try {
        await File.create({
            name: req.file.filename,
            size: req.file.size,
            path: req.file.path,
            createdAt: Date.now()
        });

        res.status(200).redirect('homepage');
    } catch (error) {
        throw new Error(`Error when upload file: ${error}`);
    }
});

// @desc perbarui file
// @route PUT- /api/edit/:id
// @access public
const editFile = asyncHandler(async (req, res) => {

    const get_file_data = await File.findById(req.params.id);
    const newData = req.body.myData;

    fs.readFile(get_file_data.path, 'utf-8', (err, data) => {
        if (err) {
            console.log(err);
        }

        const result = data.replace(data, newData);

        fs.writeFile(get_file_data.path, result, (err) => {
            if (err) return console.error(err);

            res.status(200).redirect('/views/homepage');
        });
    });

});

// @desc hapus file
// @route DELETE - /api/delete/:id
// @access public
const deleteFile = asyncHandler(async (req, res) => {
    const fileId = await File.findById(req.params.id);

    if (!fileId) {
        res.status(400);
        throw new Error('Cannot find a request file!');
    }

    await File.findByIdAndRemove(req.params.id)
        .then(() => {
            fs.unlinkSync(fileId.path);
        })
        .catch((err) => {
            res.status(400);
            throw new Error(err);
        })

    res.status(200).json({
        message: 'Berhasil delete file!',
        file_details: {
            name: req.file.filename,
            size: req.file.size,
            path: req.file.path
        }
    });

});

module.exports = { downloadFile, uploadFile, editFile, deleteFile }