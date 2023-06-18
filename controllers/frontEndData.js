const Assets = require('../model/Assets');
const Cart = require('../model/Cart');
const NftUsers = require('../model/NftUsers');
const RequestMessages = require('../model/RequestMessages');



const getAlltrendingAssets = async (req, res) => {
    const trendingAssets = await Assets.find().limit(8);
    if(!trendingAssets) return res.status(204).json({ message : 'no data found' });
    
    res.status(200).json({trendingAssets})
}


const getHompageData = async (req, res) => {
    const assets = await Assets.find().limit(48);
    if(!assets) return res.status(204).json({ message : 'no data found' });

    res.status(200).json({assets});
}

const getAllAssets  =  async (req, res) => {
    const assets = await Assets.find();
    if(!assets) return res.status(204).json({ message : 'no data found' });

    res.status(200).json({assets});
}

const getAllCartItems = async(req, res) => {
    const cartItems = await Cart.find();
    if(!cartItems) return res.status(204).json({ message : 'no data found' });

    res.status(200).json({cartItems});
}

const getAllMessage = async(req, res) => {
  const messages = await RequestMessages.find();

  if(!messages) return res.status(204).json({ message : 'no data found' });

    res.status(200).json({messages});
  
}

const getAllUsers = async(req, res) => {
    const users = await NftUsers.find();
    if(!users) return res.status(204).json({ message : 'no data found' });

    res.status(200).json({users});
}

module.exports = {
    getAlltrendingAssets,
    getHompageData,
    getAllAssets,
    getAllCartItems,
    getAllMessage,
    getAllUsers
}