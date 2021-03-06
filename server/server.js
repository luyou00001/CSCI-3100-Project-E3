// import

import express from 'express';
import mongoose from 'mongoose';
import { createServer } from 'http';
import { Server, Socket } from "socket.io";
import Cors from 'cors';

const app = express();
const port = process.env.PORT || 9000;
const http = createServer(app);
const io = new Server(http, {
    cors: {
        origin: '*',	
    }
});

const Schema = mongoose.Schema;

app.use(express.json());
app.use(Cors());

// Schema for database

//Model of User
const User = mongoose.model('userinfo', new Schema({	
	name: String,	
	email: String,	
	password: String,	
    score: Number	
}));

//Model of Room
const Room = mongoose.model('Room',new Schema({
    roomname: String,
    numofusers: Number,
    ingame: Boolean
}));

//Model of RoomMember
const RoomMember = mongoose.model('RoomMember',new Schema({
    roomid: String,
    userid : String,
    name: String,
    socketID : String,
    ready: Boolean
}));

//Model of Message
const Message = mongoose.model('Message',new Schema({
    roomid: String,
    userid : String,
    name: String,
    imageindex: Number,
    message : String
}));

//URL connect to MongoDB
const dbUrl = 'mongodb+srv://csci3100e3:magicmaze@cluster0.ablzq.mongodb.net/userdb?retryWrites=true&w=majority';

mongoose.connect(dbUrl,{
	useCreateIndex: true,
	useNewUrlParser: true,
	userUnifiedTopology: true
});

//Used to check whether the server is running
app.get('/', (req,res) => {
    res.send('App Works !!!!');
});

const db = mongoose.connection;

//A function that retrieve the rank of all users from the database and count the rank of a specific user by the user id
app.post('/findMyRanking', (req, res) => {
	const dbUser = req.body;
	const id = dbUser._id;
	
	User.find({}, {"_id" : 1}, (err, data) => {
		if (err) {
			res.status(500).send(err);
		} else {
			let count = 1;
			for (let i = 0; i < data.length; i++) {
				if(data[i]._id!=id){
					count++;
				} else {
					break;
				}
			}
			console.log(count);
			res.status(200).send({"rank": count});
		}
	}).sort({"score" : -1})
})

//A function that retrieve the name and score of all users from the database sorted by score in descending order
app.post('/findRanking', (req, res) => {
	const dbUser = req.body;
	
	User.find(dbUser, {"_id" : 1, "name" : 1, "score" : 1}, (err, data) => {
		if (err) {
			res.status(500).send(err);
		} else {
			res.status(200).send(data);
		}
	}).sort({"score" : -1}).limit(100)
})

//A function that find the name and score of a user from database
app.post('/findAccount', (req, res) => {
	const dbUser = req.body;
	
	User.find(dbUser, {"_id" : 1, "name" : 1, "score" : 1}, (err, data) => {
		if (err) {
			res.status(500).send(err);
		} else {
			res.status(200).send(data);
		}
	})
})

//A function that create a new user on databsae
app.post('/createAccount', (req, res) => {
	const dbUser = req.body;
	
	User.create(dbUser, (err, data) => {
		if (err) {
			res.status(500).send(err);
		} else {
			res.status(201).send(data);
		}
	})
})

//A function that update the password of a user on database
app.post('/updateAccount', (req, res) => {
	const id = req.body._id;
	const password = req.body.password;
	
	User.update({ "_id": id }, { "password": password }, {}, (err, data) => {
		if (err) {
			res.status(500).send(err);
		} else {
			res.status(201).send(data);
		}
	})
})

//A function that update the score of a user on database
app.post('/updateScore', (req, res) => {
	const id = req.body._id;
	const score = req.body.score;
	
	User.update({ "_id": id }, { "score": score }, {}, (err, data) => {
		if (err) {
			res.status(500).send(err);
		} else {
			res.status(201).send(data);
		}
	})
})

// A function that load the message of the room once a user enter a room
app.get('/messages', (req, res) => {
    const id = req.query.roomid;
    //console.log(id);
    Message.find({"roomid": id}, (err, messages) => {
		res.status(200).send(messages);
        //console.log(messages);
		/*if (err) {
			res.status(500).send(err);
		} else {
			res.status(200).send(messages);
		}*/
    });
});

// A function that load the member of the room once a user enter a room
app.get('/roommember', (req, res) => {
    const id = req.query.roomid;
    //console.log(name);
    RoomMember.find({"roomid": id}, (err, messages) => {
        //console.log(messages);
        res.send(messages);
    });
});

// A function that load all room information once a user enter custom room
app.get('/room', (req, res) => {
    Room.find({}, (err, messages) => {
        res.send(messages);
    });
});

// global array for matching
var globalplayer = [];


//socket io connect (user connect)
io.on('connection', (socket) =>{

    console.log('a user is connected')

    // function for a user create room and update in database and send to all users for update
    socket.on('createroom',async (data) => {
        // data -> roomname / userid / user name (name)
        console.log('create room')

        const rom = {roomname: data.roomname, numofusers: 1, ingame:false};
        const room = new Room(rom);
        let obj = await room.save();

        const id = obj._id.toString();
        const memberdata = {roomid: id, userid: data.userid, name:data.name, socketID: socket.id, ready: false};
        const roommember = new RoomMember(memberdata);
        let memobj = await roommember.save();

        io.emit('createroom',obj);
        socket.join(id);
        socket.broadcast.to(id).emit('addroommember',{roomid: id, userid: data.userid, name: data.name});
        socket.emit('getroominfo',{roomid:id, roomname:data.roomname});
    });

    // function for a user join room and update in database and send to all users for update
    socket.on('joinroom',async (data) => {
        // roomid, roomname, userid, username
        console.log('in room')
        //console.log(data.roomid);
        const id = mongoose.Types.ObjectId(data.roomid);
        //console.log(typeof id);
        //console.log(id);
        let doc = await Room.findOneAndUpdate({_id: id, roomname:data.roomname},{$inc : {'numofusers' : 1}},{new: true});
        //console.log(doc);
        if (doc.numofusers>4) {
            doc = await Room.findOneAndUpdate({_id: id,roomname:data.roomname},{$inc : {'numofusers' : -1}},{new: true});
            socket.emit('failjoin',{roomname: data.roomname});
        }
        else {
            const rdata = {roomid: data.roomid, userid: data.userid, name:data.name, socketID: socket.id, ready: false};
            const roommember = new RoomMember(rdata);
            let obj = await roommember.save();

            io.emit('addroomlist', doc);
            socket.join(data.roomid);
            socket.broadcast.to(data.roomid).emit('addroommember', {roomid:data.roomid, userid: data.userid, name: data.name});
            socket.emit('getroominfo',{roomid:id, roomname:data.roomname});
        }
    });

    // function for a user send message in the room and update in database and send to all users for update in the room (real time communication)
    socket.on('messages',async (data)=>{
        //roomid, userid, name, message
        const message = new Message(data);
        let res = await message.save();
        io.to(data.roomid).emit('message',data);
    });

    // function for a user send its ready state in the room and update in database and send to all users for update
    socket.on('readychange',async (data)=>{
        // roomid, userid, number , ready array, save
        // console.log(data.save);
        let doc = await RoomMember.findOneAndUpdate({roomid: data.roomid, userid:data.userid}, {ready : data.save},{new: true});
        // console.log(doc);
        io.to(data.roomid).emit('readychange',data);
    });

    // function for a user to match for a room, after at least 4 players in match, it create an room for them and send information to them
    socket.on('ranking', async (data)=>{
        //userid, username
        var info = {userid:data.userid,name:data.name,usersocket:socket,socketid:socket.id};
        globalplayer.push(info);
        console.log(globalplayer);
        if (globalplayer.length==4){
            var temp = globalplayer.splice(0,5);
            globalplayer = globalplayer.splice(0,4);
            var rname = temp[0].name + "'s room";
            var rom = {roomname: rname, numofusers: 4, ingame: true};
            var room = new Room(rom);
            let obj = await room.save();
            var id = obj._id.toString();
            for (var i=0;i<temp.length;i++){
                var memberdata = {roomid: id, userid: temp[i].userid, name:temp[i].name, socketID: temp[i].socketid, ready: false};
                var roommember = new RoomMember(memberdata);
                let memobj = await roommember.save();
            }
            for (var i=0;i<temp.length;i++) {
                var s = temp[i].usersocket;
                s.join(id);
            }
            io.to(id).emit('getroominfo',{roomid:id, roomname:rname});
            io.emit('createroom',obj);
        }
    });

    // function for a user leave the room and update in database and send to all users for update
    socket.on("leaveroom", async (data) => {
        // data -> roomid, roomname / userid / user name (name)
        await RoomMember.deleteOne({roomid:data.roomid, userid:data.userid});
        const id = mongoose.Types.ObjectId(data.roomid);
        let doc = await Room.findOneAndUpdate({_id: id},{$inc : {'numofusers' : -1}},{new: true});
        if (!doc || doc.numofusers<=0) {
            await Room.deleteOne({_id: id});
            await Message.deleteMany({roomid:data.roomid});
            io.emit('deleteroom',doc);
        }
        else {
            socket.broadcast.to(data.roomid).emit('decreaseroommember',{roomid:data.roomid, userid: data.userid, name: data.name});
            io.emit('downroomlist',doc);
        }
        socket.leave(data.roomid);
    });

    // function for a user suddenly disconnect -> clear some record in database
    socket.on("disconnect", async () =>{
        console.log("disconnect");
        const isMatch = (element) => element.socketid === socket.id;
        var match = globalplayer.findIndex(isMatch);
        if (match!==-1)
            globalplayer.splice(globalplayer.findIndex(isMatch),1);
        let data = await RoomMember.findOne({socketID:socket.id});
        if (data) {
            await RoomMember.deleteOne({roomid:data.roomid, userid:data.userid});
            const id = mongoose.Types.ObjectId(data.roomid);
            let doc = await Room.findOneAndUpdate({_id: id},{$inc : {'numofusers' : -1}},{new: true});
            if (!doc || doc.numofusers<=0) {
                await Room.deleteOne({_id: id});
                await Message.deleteMany({roomid:data.roomid});
                io.emit('deleteroom',doc);
            }
            else {
                socket.broadcast.to(data.roomid).emit('decreaseroommember',{roomid:data.roomid, userid: data.userid, name: data.name});
                io.emit('downroomlist',doc);
            }
            socket.leave(data.roomid);
        }
    });

    // function for a user cancel the matching -> remove user data from queue
    socket.on("cancelrank",(data)=>{
        const isMatch = (element) => element.userid === data.userid;
        var match = globalplayer.findIndex(isMatch);
        if (match!==-1)
            globalplayer.splice(globalplayer.findIndex(isMatch),1);
        console.log(globalplayer);
    });

    // function for a user to move in the game and send to all users in the game for update
    socket.on('move', (data)=>{
        io.to(data.roomid).emit('move',data);
	});
    socket.on('startgame', async (data) => {
        io.to(data.roomid).emit('startgame');
        const id = mongoose.Types.ObjectId(data.roomid);
        let doc = await Room.findOneAndUpdate({_id: id},{ingame: true},{new: true});
        io.emit("roomingame",data);
    });

    // function for initialize the entrance and and send to all users in the game for update
	socket.on('entrances', (data) => {

		const id = data.roomid;
		
		let randomEntrances=[], boardHeight=data.boardHeight, boardWidth=data.boardWidth,randomValues;
		for (let i = 0; i < boardHeight; i++) {
			for (let j = 0; j < boardWidth; j++) {
				randomEntrances.push([])
				let entranceDifferences = [[1, -1], [1, 0], [0, 1], [-1, 1]]
				let temp = 4
				while (temp > 0) {
					randomValues = Math.floor(Math.random() * temp)
					let targetWidth = j + entranceDifferences[randomValues][0]
					let targetHeight = i + entranceDifferences[randomValues][1]
					if (targetWidth < 0 || targetWidth >= boardHeight || targetHeight < 0 || targetHeight >= boardHeight) {
						randomEntrances[j + i * boardWidth].push([])
						randomEntrances[j + i * boardWidth][4 - temp].push(j)
						randomEntrances[j + i * boardWidth][4 - temp].push(i)
					}
					else {
						randomEntrances[j + i * boardWidth].push([])
						randomEntrances[j + i * boardWidth][4 - temp].push(targetWidth)
						randomEntrances[j + i * boardWidth][4 - temp].push(targetHeight)
					}
					temp--
					entranceDifferences.splice(randomValues, 1)
				}
			}
		}
		io.to(data.roomid).emit('entrances',randomEntrances);
	});
});

http.listen(port, ()=>console.log(`Listening on: ${port}`));