// controllers/uploadController.js
import multer from 'multer';
import Image from '../models/image.model.js';

// Configure multer storage
const storageProfile = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/profile'); // Directory to save the uploaded files
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname); // Filename format
    }
});

const upload = multer({ storage: storageProfile }).single('image'); // 'image' is the field name in the form

// Upload image handler
export const uploadImage = async (req, res) => {
    upload(req, res, async (err) => {
        if (err instanceof multer.MulterError) {
            return res.status(500).json({ success: 0, message: err.message });
        } else if (err) {
            return res.status(500).json({ success: 0, message: err.message });
        }

        if (!req.file) {
            return res.status(400).json({ success: 0, message: 'Please select an image to upload' });
        }

        try {
            const newImage = new Image({
                filename: req.file.filename,
                path: req.file.path,
            });

            await newImage.save();

            res.status(200).json({ success: 1, message: 'Image uploaded successfully', data: newImage });
        } catch (err) {
            res.status(500).json({ success: 0, message: 'Internal Server Error', error: err.message });
        }
    });
};


export const getImage = async (req, res) => {
    try {
        const imageId = req.params.id;
        const image = await Image.findById(imageId);
        
        if (!image) {
            return res.status(404).json({ success: 0, message: 'Image not found' });
        }

        res.status(200).json({ success: 1, data: image.path });
    } catch (err) {
        res.status(500).json({ success: 0, message: 'Internal Server Error', error: err.message });
    }
};