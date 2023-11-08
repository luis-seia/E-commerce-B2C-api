const cloudinary = require('cloudinary').v2;
require('dotenv').config()

cloudinary.config({ 
  cloud_name: 'dwf7akepl', 
  api_key: '176587156751972', 
  api_secret: 'ez0W-DArko9KL6uFk9JuWarFQSM' 
});

const uploadImageToCloudinary = async (image, name) => {
  try {
    const result = await cloudinary.uploader.upload(image, {
      public_id: name
    });
    
    return {
      success: true,
      url: result.secure_url
    };
  } catch (error) {
    return {
      success: false,
      message: error.message
    };
  }
};

const deleteImageFromCloudinary = async (name) => {
  try {
    const result = await cloudinary.uploader.destroy(name)
    console.log(result)
    return {success: true}
  } catch (error) {
    console.log(error)
    return {success: false, error: error}
  }
}

module.exports = {uploadImageToCloudinary, deleteImageFromCloudinary};





