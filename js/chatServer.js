var exp = require('express')(), httpS = require('http').Server(exp), 
sockIo = require('socket.io')(httpS);

var arrUsers = [];

exp.get('/',function(req,res){
	res.sendfile('realtalk.html');
});

sockIo.on('connect', function(socket){
	// Talk part
	sockIo.on('incoming msg', function(msg){
		console.log("typing");
		sockIo.emit('incoming msg',msg);
		console.log(msg); 
	});

	sockIo.on('disconnect', function(){
		sockIO.emit("disconnect");
		console.log("died");
	});

	sockIo.on('add User',function(data){
		sockIo.emit('add user: ' + data);
		console.log("user in");
		arrUser.push({"username": data});
	});

});

httpS.listen(3000, function(){
	console.log("yeah");
});