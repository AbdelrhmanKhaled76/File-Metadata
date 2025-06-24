const express = require('express');
const app = express();
const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });


app.use(cors());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.static('./public'));

app.get('/',(req,res)=>{
    res.sendFile('./public/index.html');
})


app.post("/api/fileanalyse", upload.single("upfile"), (req, res) => {
  if (!req.file) {
    return res.status(400).json({
      error: "file field is required",
    });
  }
  return res.json({
    name: req.file.originalname,
    type: req.file.mimetype,
    size: req.file.size,
  });
});

app.listen(process.env.PORT || 3000,()=>{
    console.log("listening on port 3000 !!");
});
