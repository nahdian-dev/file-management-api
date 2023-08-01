const fileServices = require('../services/file.services');
const utility = require('../utilities/utility');

// @desc menampilkan menu utama
// @route GET - ${BASEURL}/
// @access public
const homepage = async (req, res) => {
    const data = await fileServices.getAllFile();
    const partials = utility.accessPartialsViews;

    return res.render('homepage', { data, partials });
};

const edit = async (req, res) => {
    const file = await fileServices.getFileById(req.params.id);
    const fileValue = utility.accessFileLocalRepo(file.name);

    res.render('edit', { file: file, fileValue: fileValue });
}

module.exports = { homepage, edit };