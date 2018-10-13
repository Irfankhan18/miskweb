const express = require("express");
const bodyParser = require("body-parser");
// const path = require("path");
const cors = require("cors");
const passport = require("passport");
const email =require("./routes/email");


// const icons =require("./routes/icons");

const app = express();

//const port = process.env.PORT || 8080; //changed for heruku
const port = 3002;

//allow other domains to connect
// const corsOptions = {
//   origin: 'http://localhost:4200',
//   optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
// }
app.use(cors());

//body-parser middleware

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/front-end/dist'));

//Routes 
app.use('/email', email);
// app.use('/icons', icons);

app.listen(port, () => {
  
   console.log('server started on port '+port);
});
// app.get('/*', function(req, res) {
//     res.sendFile(path.join(__dirname + '/dist/index.html'));
//   });

//   app.listen(process.env.PORT || 3000, function(){
//     console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
//   });