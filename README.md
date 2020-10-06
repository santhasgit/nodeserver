Tutorial:
This Tutorial gives about creating Node api for fectch data.

Requirements:
node&npm
git

To run locally 
A.Installation:
- clone this repo
- Run npm install 

Run Application:

npm start

GET Routes:

- hit /patient for returning patient name.
 -hit /elements?a="patientName" returning patient report.
 
API response:
{
  "details": [
    {
      "name": "adavika",
      "value": "report1"
    },
    {
      "name": "Joe",
      "value": "report2"
    },
    {
      "name": "Smith",
      "value": "report3"
    },
    {
      "name": "Michela",
      "value": "report4"
    }
  ]
}
