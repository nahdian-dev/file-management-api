// const CustomApiError = require('../utilities/CustomApiError');
const File = require('../models/file.model');

exports.getAllFile = async () => {
    try {
        const fileData = await File.find();
        const results = fileData.map(data => data.toObject());

        return results;
    } catch (error) {
        console.log(error);
    }
};