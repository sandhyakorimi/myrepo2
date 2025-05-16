// const playerData = require("../model/usermodel2");

// const myaddplayer = async(req,res) =>{
//     const {playerName,playerId,playerAge,playerAddress,} = req.body;
//     console.log(playerName,playerId,playerAge,playerAddress);

//     try{
//         const newPlayer = new playerData({playerName,playerId,playerAge,playerAddress});
//         await newPlayer.save();

//         res.send("player added successfully...")
//     }
//     catch(er){
//         console.log(er);
//         res.send(er);
//     }
// }

// const mygetplayer = async(req,res) =>{
//     try{
//         const newPlayer = await playerData.find();
//         res.send(newPlayer);
//     }
//     catch(er){
//         res.send(er);
//     }
// }
// exports.myaddplayer = myaddplayer;
// exports.mygetplayer = mygetplayer;