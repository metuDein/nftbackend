const Blog = require('../../model/Blog');

const createPost = async (req, res) => {
    const { title, body, writtenBy } =  req.body;


    if(!body || !title) return res.status(400).json({message : 'all field required'});

    const duplicatePost  = await Blog.findOne({ title : title, body : body }).exec();

    if(!duplicatePost) {
        const post = await Blog.create({ writtenBy : writtenBy, title : title, body : body })

        if (!post) return res.status(403).json({message : 'failed'});

        res.status(200).json({post});
    }else{
        res.status(409).json({message : 'duplicate post'});
    }
}
const deletePost  = async (req, res) => {
    const { id } = req.body;

    if(!id) return res.status(400).json({message : 'id required'});

    const post = await Blog.findOne({ _id : id}).exec();

    if(!post) return res.status(204).json({message : 'no post found'});

    const result = await post.deleteOne({_id : id});

    if(!result) return res.status(400).json({message : 'delete failed'});

    res.status(200).json({message : 'post deleted'})
}

module.exports = {
    createPost,
    deletePost
}