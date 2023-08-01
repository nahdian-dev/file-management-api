const File = require('../models/file.model');
const CustomApiError = require('../utilities/CustomApiError');

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
        throw new CustomApiError(400, error);
    }
};

exports.createFileToDB = async (filename, size, path) => {
    try {
        await File.create({
            name: filename,
            size: size,
            path: path,
            createdAt: Date.now()
        });

        return { statusCode: 200 };
    } catch (error) {
        throw new CustomApiError(400, `Error when upload file: ${error}`);
    }
};