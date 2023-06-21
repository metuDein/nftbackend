const NftUsers = require('../model/NftUsers');

const handleLogin = async (req, res) => {
   const {username, password} = req.body;

   if(!username || !password) return res.status(400).json({message : 'all fields required'});
   
   const user = await NftUsers.findOne({ userName : username, password: password }).exec(); 

   if(!user) return res.status(401).json({message : 'invaild details or you are not registered'});
   const roles = Object.values(user.roles);

   res.status(200).json({user, roles});

}

const handleRegister = async (req, res) => {
    const {username, email, password} = req.body;

    if(!username || !email || !password) return res.status(400).json({message : 'all fields required'});

    const duplicate = await NftUsers.findOne({ userName : username, userEmail : email}).exec();

    if(!duplicate) {
        const user = await NftUsers.create({ userName : username, userEmail : email, password : password });

        if(!user)  return res.status(403).json({message : 'registration failed'});

        const roles = Object.values(user.roles);

        res.status(201).json({user, roles});

    }else{
        return res.status(409).json({message : 'duplicate user found'});
    }
}

module.exports =  {
    handleRegister,
    handleLogin
}