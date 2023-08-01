const fs = require('fs');

const fileServices = require('../services/file.services');
const File = require('../models/file.model');
const utility = require('../utilities/utility');

// @desc menampilkan menu utama
// @route GET - ${BASEURL}/
// @access public
const homepage = async (req, res) => {
    const data = await fileServices.getAllFile();
    const partials = utility.partials;

    return res.render('homepage', { data, partials });
};

const edit = async (req, res) => {
    const file = await File.findById(req.params.id);
    const fileValue = fs.readFileSync(file.path, { encoding: 'utf-8' });

    res.render('edit', { file: file, fileValue: fileValue });
}

module.exports = { homepage, edit };