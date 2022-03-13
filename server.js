//Install express server
const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors')


// Serve only the static files form the dist directory
app.use(cors());
app.use(express.static('./dist/guardian-frontend'));

app.get('/*', function (req,res){
  res.sendFile(path.join(__dirname,'./../dist/guardian-frontend/index.html'));
  console.log('path',path.join(__dirname,'./../dist/guardian-frontend/index.html'))
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
