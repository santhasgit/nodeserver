var fs = require('fs'); 

// json file with the data 
const express = require("express"); 
const app = express(); 
var port = 8282;
// To solve the cors issue 
const cors=require('cors'); 
	
app.listen(port, 
	() => console.log("Server Start at the Port")); 
	
app.use(express.static('public')); 
app.use(cors()); 

// when get request is made, alldata() is called 
app.get('/elements', alldata); 
app.get('/patient',patientdata);
function patientdata(req,res)
{
    var p_data = fs.readFileSync('name.json'); 
    var p_elements = JSON.parse(p_data); 
   // console.log(p_elements.details[0]);
	// Returns all information about the elements 
	res.send(p_elements); 
}
function alldata(request, response) { 
    console.log(request.query.a);

    var data = fs.readFileSync(request.query.a+'.json'); 

    var elements = JSON.parse(data); 
   
	// Returns all information about the elements 
	response.send(elements); 
} 

app.get('/elements/:element/', searchElement); 

function searchElement(request, response) { 
	var word = request.params.element; 
	word = word.charAt(0).toUpperCase() 
		+ word.slice(1).toLowerCase(); 
	
	if(elements[word]) { 
		var reply = elements[word];		 
	} 
	else { 
		var reply = { 
			status:"Not Found"
		} 
	} 
	
	response.send(reply); 
} 
