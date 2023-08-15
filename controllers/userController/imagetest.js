const cloudinary = require('cloudinary').v2;

cloudinary.config({ 
    cloud_name: process.env.CLOUD_NAME, 
    api_key:  process.env.API_KEY, 
    api_secret: process.env.API_SECRET
  });


  const imageUpload =  async (req, res) => {
    const {image} = req.body;

    const uniqueID = Date.now()

    console.log(uniqueID);
    let uploadImg;

    cloudinary.uploader.upload(image,
        { public_id: uniqueID },
        function (error, result) { 
            console.log(result.url);
            uploadImg  = result.url
            console.log(uploadImg);

          if(!uploadImg) return res.status(400).json({message : "image upload failed"})

          res.status(201).json({mesage : 'upload succefull', uploadImg});
        });


  }

  module.exports = {
    imageUpload
  }