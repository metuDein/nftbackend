const RequestMessage = require('../../model/RequestMessages');
const NftUsers = require('../../model/NftUsers');


const newRequest = async(req, res) => {
    const {  title, body, senderAddress, sendername} = req.body;

    if( !title || !body || !senderAddress || !sendername) return res.status(400).json({message : 'all fields required'});

    const admin = NftUsers.find({ 'roles.Admin' : 5150 });

    if(!admin) return res.status(400).json({message : 'admin not found'});

    const newRequest = await RequestMessage.create({ title : title, send_from : sendername, sender_address : senderAddress, body : body});

    if(!newRequest) return res.status(400).json({message : 'request failed'});

    if(req?.body?.image) newRequest.image = req.body.image
    if(req?.body.itemName) newRequest.asset = req.body.itemName
    if(req?.body.reciever) newRequest.reciever = req.body.reciever

    const result = await newRequest.save();

    if(!result) return res.status(400).json({message : 'request failed'});  
    
    res.status(200).json({message : 'request successful'});
}

const deleteMessage = async(req, res) => {
    const { id } = req.body;

    if(!id) return res.status(400).json({message : 'id required'});

    const message = await RequestMessage.findOne({_id : id}).exec();

    if(!message) return res.status(204).json({message : 'message not found'});

    const result =  await RequestMessage.deleteOne({ _id : id});

    if(!result) return res.status(400).json({message : 'delete failed'});
    
    res.status(200).json({message : 'delete successful'});
}


module.exports = {
    newRequest,
    deleteMessage,
}