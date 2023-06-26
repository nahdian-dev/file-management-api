const File = require('../models/file_model');
const asyncHandler = require('express-async-handler');
const fs = require('fs');

// @desc menampilkan menu utama
// @route GET - /views/homepage
// @access public
const homepage = async (req, res) => {
    let data = [];

    await File.find()
        .then((result) => {
            const array = result.map(data => data.toObject());

            array.forEach(function (items) {
                data.push(items);
            });
        })
        .catch((error) => {
            console.log(error);
        });

    res.render('pages/homepage', { data: data });
};

const edit = async (req, res) => {
    const file = await File.findById(req.params.id);
    const fileValue = fs.readFileSync(file.path, { encoding: 'utf-8' });

    res.render('pages/edit', { fileValue: fileValue });
}

module.exports = { homepage, edit };