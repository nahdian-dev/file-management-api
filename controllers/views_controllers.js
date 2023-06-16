

// @desc menampilkan menu utama
// @route GET - /views/homepage
// @access public
const homepage = (req, res) => {
    res.render('pages/homepage');
}

module.exports = { homepage };