const express = require('express');
const app = express();
const multer = require('multer');
const upload = multer({dest:'uploads/'})


app.use(express.static('./public'));
app.use(express.urlencoded({extended:false}));

app.get('/',(req,res)=>{
    res.sendFile('./public/index.html');
})


app.post('/api/fileanalyse',upload.single('upfile'), (req,res)=>{
    const {originalname, mimetype, size} = req.file
    res.json({"name" : originalname, "type" : mimetype, "size" : Number(size)});
})

app.listen(process.env.PORT || 3000,()=>{
    console.log("listening on port 3000 !!");
});