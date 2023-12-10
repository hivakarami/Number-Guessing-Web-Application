
var arr = [];
var express = require('express');
const app = express();
app.listen(3000, () => console.log('listening at 3000'));
app.use(express.static('public'));
app.use(express.json({limit: '1mb'}));

app.post('/api', (request, response) =>{
    console.log("I got an request!!");
    console.log(request.body);
    arr.push(request.body);
    response.end();

});

app.post('/scoreboard', (request, response) =>{
    console.log("I got an request from scoreboard!!");
    console.log(request.body);
    
    response.json({
        data: arr,
    });

});