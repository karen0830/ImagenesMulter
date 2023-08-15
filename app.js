const express = require('express');
const multer = require('multer')

const upload = multer({dest: 'uploads/'})

const app = express();

app.use(express.json())

app.get('/', function (req, res){
    res.send('Holaa Mundo!!!!!')
})

app.post('/imagen', upload.single('imagen'), function(req, res){
    const body = req.body;
    const imgen = req.file;
    console.log(imgen);
    res.send('Hola mundo desde post')
})

app.listen(3000)