var express = require('express');
var app = express();
const port = process.env.PORT || 3000;

app.get('/',function(req, res){
    res.send('Olá Mundo');
});

app.listen(port, ()=> {
    console.log(`Servidor on-line na porta ${port}!`);
});
