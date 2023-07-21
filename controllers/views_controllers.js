const File = require('../models/file_model');
const fs = require('fs');
const path = require('path');

// @desc menampilkan menu utama
// @route GET - /views/homepage
// @access public
const homepage = async (req, res) => {
    let data = [];

    function partials(file) {
        const dir = path.join(__dirname, '..', 'views', 'partials', file);
        return fs.readFileSync(dir, 'utf-8');
    }

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

    res.render('homepage', { data, partials });
    // res.render('pages/homepage', { data: data });
};

const edit = async (req, res) => {
    const file = await File.findById(req.params.id);
    const fileValue = fs.readFileSync(file.path, { encoding: 'utf-8' });

    res.render('pages/edit', { file: file, fileValue: fileValue });
}

module.exports = { homepage, edit };