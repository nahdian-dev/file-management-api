const asyncHandler = require('express-async-handler');
const mongoose = require('mongoose');
const File = require('../models/file_model');
const Joi = require('joi');
const fs = require('fs');
const path = require('path');

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

    const schema = Joi.object({
        file: Joi.string().required().pattern(new RegExp('.txt$')),
    });

    const { error, value } = schema.validate({ file: req.file.filename });

    // Error handling extension file
    if (error) {
        res.status(400);
        fs.unlinkSync(req.file.path);
        throw new Error(error.details[0].message);
    }

    File.create({
        name: req.file.filename,
        size: req.file.size,
        path: req.file.path,
        createdAt: Date.now()
    });

    res.json({
        message: 'Berhasil upload file!',
        value: value,
        file_details: req.file
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