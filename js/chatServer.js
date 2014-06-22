var exp = require('express')(), httpS = require('http').Server(exp), 
sockIo = require('socket.io')(httpS);

var arrUsers = [];
var socChannels = {};
exp.get('/',function(req,res){
	res.sendfile('../index.html');
});
console.log("chat up");
sockIo.on('connect', function(socket){
	// Talk part
	socket.on('incoming msg', function(msg){

		console.log("typing");
		sockIo.emit('incoming msg',msg);
		console.log(msg); 
	});

	socket.on('disconnect', function(){
		socket.emit("kill",socChannels.username);
		console.log( socChannels.username + " died");
		arrUsers.toString();

	});



	socket.on('add user',function(strNme){
		sockIo.emit('add user',strNme);
		console.log(strNme);
		arrUsers.push({"username": strNme});
		socChannels.username = strNme;
		console.log(socChannels);
		console.log(arrUsers.toString());
		//console.log(strNme+" has come");
	});



	socket.on('user connected', function(){
//		console.log("Call the paper");
	});



});

sockIo.sockets.on('connect',function(socket){
	socket.broadcast.emit("user connected");
	console.log("Users connected");
});

httpS.listen(3000, function(){
	console.log("yeah");
});