const asyncHandler = require('express-async-handler');
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

    res.json({
        message: 'Berhasil upload file!'
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