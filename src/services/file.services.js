const File = require('../models/file.model');

exports.getAllFile = async () => {
    try {
        const fileData = await File.find();
        const results = fileData.map(data => data.toObject());

        return results;
    } catch (error) {
        console.error(error);
    }
};

exports.getFileById = async (id) => {
    try {
        const file = await File.findById(id);
        return file;
    } catch (error) {
        console.error(error);
    }
};