var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var response = {};

//10 employees loaded on page load
var employee = [{
		id: 1,
		firstName: 'Sanjai',
		lastName: 'kumar',
		email: 'sanjaikumars@virtusapolaris.com',
		position: 'Consultant'
	},{
		id: 2,
		firstName: 'Suresh',
		lastName: 'kumar',
		email: 'sureshkumars@virtusapolaris.com',
		position: 'Associate-Consultant'
	},{
		id: 3,
		firstName: 'Mahesh',
		lastName: 'jeyagopal',
		email: 'maheshjeyagopal@virtusapolaris.com',
		position: 'Senior-Consultant'
	},{
		id: 4,
		firstName: 'Rajesh',
		lastName: 'kumar',
		email: 'rajeshjekumar@virtusapolaris.com',
		position: 'Senior-Consultant'
	},{
		id: 5,
		firstName: 'Anitha',
		lastName: 'jeyagopal',
		email: 'anithajeyagopal@virtusapolaris.com',
		position: 'Consultant'
	},{
		id: 6,
		firstName: 'Deepika',
		lastName: 'gayathri',
		email: 'deepikagayathri@virtusapolaris.com',
		position: 'Senior-Consultant'
	},{
		id: 7,
		firstName: 'Sathish',
		lastName: 'kumar',
		email: 'sathishkumar@virtusapolaris.com',
		position: 'Tech-Lead'
	},{
		id: 8,
		firstName: 'Srini',
		lastName: 'vasan',
		email: 'srinivasan@virtusapolaris.com',
		position: 'Architech'
	},{
		id: 9,
		firstName: 'Ritesh',
		lastName: 'sagar',
		email: 'riteshsagar@virtusapolaris.com',
		position: 'Associate-Consultant'
	},{
		id: 10,
		firstName: 'Rajesh',
		lastName: 'jeyagopal',
		email: 'rajeshjeyagopal@virtusapolaris.com',
		position: 'Consultant'
	}];
	
var PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname));

app.get('/employee', function (req, res) {
    response = {};
	res.send({ data : employee });
});

/**
 * Add Employee
 */
app.post('/employee/add', function (req, res) {
	response = req.body;
	// Find maximum of ID
	var maxID = Math.max.apply(null, employee.map(function(item) {
		return item.id;
	}));
	if (isFinite(maxID)) {
		response.id = maxID + 1;
	} else {			
		response.id = 1;
	}
	employee.push(response);
	res.send({ message : 'success' });
});

/**
 * Edit Employee
 */
app.post('/employee/edit', function (req, res) {
	response = req.body;
	for(var i=0; i<employee.length; i++) {
		if(employee[i].id == response.id) {
			employee[i] = response;
		}
	}
	res.send({ message : 'success' });
});

/**
 * Delete Employee
 */
app.post('/employee/delete', function (req, res) {
	response = req.body;
	for(var i=0; i<employee.length; i++) {
		if(employee[i].id == response.id) {
			employee.splice( i, 1 );
		}
	}
	res.send({ message : 'success' });
});

app.listen(PORT, function () {
  console.log('Server listening on '+PORT);
});
