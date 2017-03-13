var command = require('./commands.js');
var adroutes = require('./advroutes.js');

module.exports = {
	configure:function(app) {
		app.get('/register/:fileno',function(req,res) {
			console.log(req.params.fileno);
			command.select(res,req.params.fileno);
		});
		app.post('/registerAgent/',function(req,res) {
			console.log(req.body.agentid);
			command.register(res,req.body.agentid,req.body.password);
		});
		app.post('/allotment/',function(req,res) {
			console.log(req.body.fileno);
			command.allotment(res,req.body.fileno,req.body.appname,req.body.primcont,req.body.seccontact,req.body.address,
				req.body.landmark,req.body.agentid,req.body.add_type);
		});
		app.post('/updateagent/',function(req,res) {
			console.log(req.body.fileno);
			command.updatent(res,req.body.fileno,req.body.appname,req.body.primcont,req.body.seccontact,req.body.address,
				req.body.landmark,req.body.agentid,req.body.add_type);
		});
		app.post('/business/:fileno',function(req,res) {
			console.log(req.params.fileno);
			command.business(res,req.params.fileno,req.body.name,req.body.desig,req.body.contact,req.body.officecont,
				req.body.natnusiness,req.body.nosinceform,req.body.comptype,req.body.comptype,req.body.location);
		});
		app.post('/office/:fileno',function(req,res) {
			console.log(req.params.fileno);
			command.office(res,req.params.fileno,req.body.name,req.body.contact,req.body.doj,req.body.desigappl,
				req.body.yearssincejob,req.body.natbusiness,req.body.jobtype,req.body.startorg,req.body.jobtransfer,req.body.otherrem,req.body.location);
		});
		app.post('/residential/:fileno',function(req,res) {
			console.log(req.params.fileno);
			command.residential(res,req.params.fileno,req.body.name,req.body.status,req.body.marr_stat,req.body.noofmem,
				req.body.nochildren,req.body.spouseemp,req.body.locality,req.body.vehicle,req.body.regnovehicle,req.body.carparea,req.body.polinfluence,req.body.otherrem,req.body.location);
		});
		// app.get('/image/:fileno',function(req,res) {
		// 	console.log(req.params.fileno);
		// 	adroutes.upImage(res,req.params.fileno);
		// });
	}
}
