const express = require('express');
const app = new express();

app.get('/', function(request, response){
    response.sendfile('index.html');
});

app.get('/video', function(request, response){
    //Paste path to video here
    response.sendfile('res/video/video.mp4');
});

app.get('/video2', function(request, response){
    response.sendfile('res/video/video2.mp4');
});

app.listen(5000);