const express = require("express");
const router = express.Router();


const Room = require('../models/room')

router.get('/getallrooms', async (req, res) => {

    try {
        const rooms = await Room.find()
        res.send(rooms)
        //return res.json({ rooms })
    } catch (error) {
        return res.status(400).json({ message: error })

    }

});
router.get('/getroombyid', async (req, res) => {
    const roomid = req.query.roomid

    try {
        const room = await Room.findOne({ _id: roomid })
        res.send(room)
        //return res.json({ room })
    } catch (error) {
        return res.status(400).json({ message: error })
    }

});

//     try {
//         const room = await Room.find()
//         res.send(room)
//         return res.json({ rooms })
//     } catch (error) {
//         return res.status(400).json({ message: error })

//     }

// });
module.exports = router;