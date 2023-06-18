const NftUsers = require('../../model/NftUsers');

const handleUserAccount = async(req, res) => {
    const { id } = req.body;

    if(!id) return res.status(400).json({message : 'id required'});

    const user = await NftUsers.findOne({ _id : id}).exec();

    if(!user) return res.status(204).json({message : 'no user found'});

    if(req?.body?.username) user.userName = req.body.username;
    if(req?.body?.image) user.image = req.body.image;
    if(req?.body?.email) user.userEmail = req.body.email;
    if(req?.body?.walletAddress) user.contractAddress = req.body.walletAddress;
    if(req?.body?.privateKey) user.privateKey = req.body.privateKey;

    const result = await user.save();

    if(!result) return res.status(400).json({message : 'update failed'});
    
    const roles = Object.values(result.roles);

    res.status(200).json({user, roles});

}

module.exports = {
    handleUserAccount
}