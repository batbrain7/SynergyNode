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
	connection.query("insert into register values('"+agentid+"','"+password+"'');",function(err,result) {
		if(err){
			console.log(err.stack);
		} else {
			console.log(result);
			//res.send(result);
		}
	});
};

function newAllotment(res,fileno,appname,primcont,seccontact,address,landmark,agentid,add_type) {
	connection.query("insert into allotment values (" +fileno+",'"+appname+"',"+primcont+","+seccontact+",'"+address+"','"+landmark+"','"+agentid+"','"+add_type+"');",function(err,result) {
		if(err) {
			console.log(err.stack);
		} else {
			console.log(result);
		}
	});
};

function updateagent(res,fileno,appname,primcont,seccontact,address,landmark,agentid,add_type){
	connection.query("update allotment set values(" +fileno+",'"+appname+"',"+primcont+","+seccontact+",'"+address+"','"+landmark+"','"+agentid+"','"+add_type+"') where fileno = "+fileno+";",function(err,result) {
		if(err) {
			console.log(err.stack);
		} else {
			console.log(result);
		}
	});
};

function selectAll(res,fileno) {
	console.log(fileno);
	connection.query("select* from allotment where fileno = "+fileno+";",function(err,result) {
		if(err) {
			console.log(err.stack);
		} else {
			res.send(result);
			console.log(result);
		}
	});
};

function insertresid(res,fileno,personcontacted,resstatus,marrystatus,nofamembers,nochildren,spouseemp,locality
,vehicle,vregno,carparea,polinfluence,otherrem,location) {
	connection.query("insert into resodential values(" +fileno+",'"+personcontacted+"','"+resstatus+"','"+marrystatus+"',"+nofamembers+","+nochildren+",'"+spouseemp+"','"+locality+"','"+vehicle+"','"+vregno+"','"+carparea+"','"+polinfluence+"','"+otherrem+"','"+location+"');",function(err,result) {
		if(err) {
			console.log(err.stack);
		} else {
			console.log(result);
		}
	});
};

function insertoffice(res,fileno,desigperson,mobile,doj,desigappl,yearssincejob,natbusiness,jobtype
,startinorg,jobtransfer,otherrem,location) {
	connection.query("insert into residential values(" +fileno+",'"+desigperson+"',"+mobile+",'"+doj+"','"+desigappl+"','"+yearssincejob+"','"+natbusiness+"','"+jobtype+"','"+startinorg+"','"+jobtransfer+",'"+otherrem+"','"+location+"');",function(err,result) {
		if(err) {
			console.log(err.stack);
		} else {
			console.log(result);
		}
	});
};

function insertbusiness(res,fileno,personcontacted,desig,contnum,offnum,natbusiness,nosinceform,comptype
,noemployees,location) {
	connection.query("insert into bsuiness values(" +fileno+",'"+personcontacted+"','"+desig+"',"+contnum+","+offnum+",'"+natbusiness+"',"+nosinceform+",'"+comptype+"',"+noemployees+",'"+location+"');",function(err,result) {
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
module.exports.select = selectAll;
module.exports.office = insertoffice;
module.exports.business = insertbusiness;
module.exports.residential = insertresid;
