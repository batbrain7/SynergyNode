var mysql = require('mysql');

var connection = mysql.createConnection({
	host:'localhost',
	user:'root',
	password:'mohit983',
	database:'SYNERGYGO'
});

connection.connect(function(err) {
	if(err) 
		console.log("Error Connecting database" + err.stack);
	else 
		console.log("Connected");
});

function registerAgent(res,agentid,password)  {
	connection.query("insert into register values('" + agentid + "','" + password + "'');",function(err,result) {
		if(err){
			console.log(err.stack);
		} else {
			console.log(result);
			//res.send(result);
		}
	});
};

function newAllotment(res,fileno,appname,primcont,seccontact,address,landmark,agentid,add_type) {
	connection.query("insert into allotment values(" +fileno+",'"+appname+"','"+primcont+"','"+seccontact+"',
		'"+address+"','"+landmark+"','"+agentid+"','"+add_type+"');",function(err,result) {
		if(err) {
			console.log(err.stack);
		} else {
			console.log(result);
		}
	});
};

function updateagent(res,fileno,appname,primcont,seccontact,address,landmark,agentid,add_type){
	connection.query("update allotment set values(" +fileno+",'"+appname+"','"+primcont+"','"+seccontact+"',
		'"+address+"','"+landmark+"','"+agentid+"','"+add_type+"') where fileno = "+fileno+";",function(err,result) {
		if(err) {
			console.log(err.stack);
		} else {
			console.log(result);
		}
	});
};

module.exports.register = registerAgent;
module.exports.allotment = newAllotment;
module.exports.updatent = updateagent;









