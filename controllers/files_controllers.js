const asyncHandler = require('express-async-handler');
const mongoose = require('mongoose');
const File = require('../models/file_model');
const Joi = require('joi');
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

    const date = new Date();
    const today = date.getDate() + '-' + date.getMonth() + '-' + date.getFullYear();
    const times = date.getHours() + '.' + date.getMinutes();

    const filename = today + '-' + times + ' - ' + req.file.originalname;

    const schema = Joi.object({
        file: Joi.string().required().pattern(new RegExp('.txt$')),
    });

    const { error, value } = schema.validate({ file: req.file.filename });

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

})

// @desc get list file
// @route GET - /api/list-file
// @access public
const listFile = asyncHandler(async (req, res) => {

})

module.exports = { downloadFile, uploadFile, editFile, deleteFile, listFile }