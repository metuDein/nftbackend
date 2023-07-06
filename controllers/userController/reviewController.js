const Review = require('../../model/Review');

const createReview = async (req, res) => {
    const { reviewMessage, writtenBy} = req.body;

    if(!writtenBy || !reviewMessage) return res.status(400).json({message : 'all field required'});

    const review = await Review.create({ writtenBy : writtenBy, reviewMessage : reviewMessage}); 
    
    if(!review) return res.status(400).json({message : 'failed'});

    res.status(200).json({message : 'review submitted'});
} 

module.exports = {
    createReview
}